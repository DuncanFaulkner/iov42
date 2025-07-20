import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatLabel } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-view-screens',
  imports: [
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatLabel,
  ],
  templateUrl: './view-screens.html',
  styleUrl: './view-screens.scss',
})
export class ViewScreens {
  data = inject(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef);
  protected displayedColumns = ['name'];

  close() {
    this.dialogRef.close(false);
  }
}
