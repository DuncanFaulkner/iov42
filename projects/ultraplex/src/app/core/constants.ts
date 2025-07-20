export const BASE_URL = 'https://ultraplex-solutions.poc.iov42.net/api/v1';

export const SNACK_BAR_MESSAGE_TYPE = {
  success: 'green-success-snackbar',
  warning: 'orange-warning-snackbar',
  error: 'red-error-snackbar',
  default: 'default-snackbar',
} as const satisfies Record<string, string>;

export type Snackbar_Message_Type =
  (typeof SNACK_BAR_MESSAGE_TYPE)[keyof typeof SNACK_BAR_MESSAGE_TYPE];
