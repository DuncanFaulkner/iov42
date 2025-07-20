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
import { Cinema } from '../../core/model/cinema-model';
import { CinemaService } from '../../core/services/cinema';
import { DialogService } from '../../core/services/dialog-service';
import { SnackbarService } from '../../core/services/snackbar-service';
import { AddCinema } from './components/add-cinema/add-cinema';
import { AddScreens } from './components/add-screens/add-screens';
import { ViewScreens } from './components/view-screens/view-screens';

@Component({
  selector: 'app-cinemas',
  imports: [
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  templateUrl: './cinemas.html',
  styleUrl: './cinemas.scss',
  providers: [{ provide: MatDialogRef, useValue: {} }],
})
export class Cinemas {
  private refreshData = new BehaviorSubject<void>(undefined);
  private dialogRef = inject(MatDialogRef);
  private readonly route = inject(Router);
  private readonly cinemaService = inject(CinemaService);
  private readonly paginator = viewChild(MatPaginator);
  private readonly dialog = inject(MatDialog);
  private readonly dialogService = inject(DialogService);
  private readonly snackbarService = inject(SnackbarService);

  protected displayedColumns = ['name', 'actions'];

  cinema$ = this.refreshData.pipe(
    switchMap(() => this.cinemaService.getCinemas())
  );

  readonly cinema = toSignal(this.cinema$);

  protected dashboard(): void {
    this.route.navigate(['/dashboard']);
  }

  protected viewScreen(cinema: Cinema): void {
    const config: MatDialogConfig = {
      width: '800px',
      height: '600px',
      data: {
        cinema,
      },
    };

    this.dialogRef = this.dialogService.open(ViewScreens, config);
  }

  protected addScreen(cinema: Cinema): void {
    const config: MatDialogConfig = {
      data: {
        cinema,
      },
    };

    this.dialogRef = this.dialogService.open(AddScreens, config);
    this.dialogRef.afterClosed().subscribe((result) => {
      console.log(result);

      if (result) {
        const screen: Cinema = {
          name: result.name,
          screens: [],
        };
        this.cinemaService.addScreen(cinema.id, screen).subscribe((data) => {
          this.refreshData.next();
          this.snackbarService.showSuccessMessage(
            `The screen ${result} has been added to the cinema successfully`
          );
        });
      }
    });
  }

  protected add(): void {
    const config: MatDialogConfig = {
      data: {},
    };

    this.dialogRef = this.dialogService.open(AddCinema, config);
    this.dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const cinema: Cinema = {
          name: result.name,
          screens: [],
        };
        this.cinemaService.addCinema(cinema).subscribe((data) => {
          this.refreshData.next();
          this.snackbarService.showSuccessMessage(
            `The cinema ${result} has been saved successfully`
          );
        });
      }
    });
  }

  protected filteredDatasource = toSignal(
    toObservable(this.cinema).pipe(
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
