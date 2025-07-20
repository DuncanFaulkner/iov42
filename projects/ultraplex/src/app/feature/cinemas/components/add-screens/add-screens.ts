import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-screens',
  imports: [
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatLabel,
    MatFormField,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './add-screens.html',
  styleUrl: './add-screens.scss',
})
export class AddScreens {
  data = inject(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef);
  cancel() {
    this.dialogRef.close(false);
  }

  save(screen: string) {
    this.dialogRef.close(screen);
  }
}
