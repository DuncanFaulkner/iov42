import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SNACK_BAR_MESSAGE_TYPE } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private readonly snackbarBar = inject(MatSnackBar);

  public showSnackBar(context: string, message: string) {
    this.snackbarBar.open(message, '', {
      duration: 3000,
      panelClass: [context || SNACK_BAR_MESSAGE_TYPE.default],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  public showErrorMessage(message: string) {
    this.showSnackBar(SNACK_BAR_MESSAGE_TYPE.error, message);
  }

  public showSuccessMessage(message: string) {
    this.showSnackBar(SNACK_BAR_MESSAGE_TYPE.success, message);
  }

  public showWarningMessage(message: string) {
    this.showSnackBar(SNACK_BAR_MESSAGE_TYPE.warning, message);
  }

  public showDefaultMessage(message: string) {
    this.showSnackBar(SNACK_BAR_MESSAGE_TYPE.default, message);
  }

  public showServiceFailureMessage(serviceName: string, error: ErrorEvent) {
    const errorMessage = error.message ? error.message : error.error.message;
    const errorLabel = `${serviceName} service has failed: ${errorMessage}`;
    this.showErrorMessage(errorLabel);
  }
}
