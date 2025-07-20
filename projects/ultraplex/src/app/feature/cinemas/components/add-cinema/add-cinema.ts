import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-cinema',
  imports: [
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatLabel,
    MatFormField,
    MatInputModule,
  ],
  templateUrl: './add-cinema.html',
  styleUrl: './add-cinema.scss',
})
export class AddCinema {
  data = inject(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef);

  cancel() {
    this.dialogRef.close(false);
  }

  save(name: string) {
    this.dialogRef.close(name);
  }
}
