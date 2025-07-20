import { ComponentType } from '@angular/cdk/overlay';
import { inject, Injectable, TemplateRef } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  readonly dialog = inject(MatDialog);

  open<T>(
    component: ComponentType<T> | TemplateRef<T>,
    options: MatDialogConfig
  ): MatDialogRef<T, any> {
    return this.dialog.open(component, options);
  }
}
