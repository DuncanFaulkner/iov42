import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
  selector: 'app-add-movie',
  imports: [
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatLabel,
    MatFormField,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.scss',
})
export class AddMovie {
  data = inject(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef);
  private readonly formBuilder = inject(FormBuilder);

  protected form = this.formBuilder.group({
    movie: [null, [Validators.required]],
    runtime: [null, [Validators.required]],
  });

  cancel() {
    this.dialogRef.close(false);
  }

  submit(): void {
    this.dialogRef.close(this.form.value);
  }
}
