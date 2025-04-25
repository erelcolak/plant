export interface IToast {
  id?: string;
  text: string;
  status?: ToastStatus;
}

export enum ToastStatus {
  success = "success",
  error = "error",
}
