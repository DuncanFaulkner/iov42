import { Component, inject, viewChild } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { Movie } from '../../core/model/movie-model';
import { DialogService } from '../../core/services/dialog-service';
import { MovieService } from '../../core/services/movie';
import { SnackbarService } from '../../core/services/snackbar-service';
import { AddMovie } from './components/add-movie/add-movie';

@Component({
  selector: 'app-movies',
  imports: [
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
  providers: [{ provide: MatDialogRef, useValue: {} }],
})
export class Movies {
  private refreshData = new BehaviorSubject<void>(undefined);
  private dialogRef = inject(MatDialogRef);
  private readonly route = inject(Router);
  private readonly movieService = inject(MovieService);
  private readonly paginator = viewChild(MatPaginator);
  private readonly dialog = inject(MatDialog);
  private readonly dialogService = inject(DialogService);
  private readonly snackbarService = inject(SnackbarService);

  protected displayedColumns = ['name', 'runtime'];

  movies$ = this.refreshData.pipe(
    switchMap(() => this.movieService.getMovies())
  );

  readonly movie = toSignal(this.movies$);

  protected dashboard(): void {
    this.route.navigate(['/dashboard']);
  }

  protected add(): void {
    const config: MatDialogConfig = {
      data: {},
    };

    this.dialogRef = this.dialogService.open(AddMovie, config);

    this.dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const movie: Movie = {
          name: result.movie,
          runtime: result.runtime,
        };
        this.movieService.addMovies(movie).subscribe((data) => {
          this.refreshData.next();
          this.snackbarService.showSuccessMessage(
            `The cinema ${result} has been saved successfully`
          );
        });
      }
    });
  }

  protected filteredDatasource = toSignal(
    toObservable(this.movie).pipe(
      map((c) => {
        const datasource = new MatTableDataSource(c?.content);
        datasource.paginator = this.paginator() || null;
        if (datasource.paginator) {
          this.paginator()?.firstPage();
        }
        return datasource || [];
      })
    )
  );
}
