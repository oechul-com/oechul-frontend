export type HttpResponse<T> = {
  result: T;
  isSuccess: boolean;
  code: string;
  message: string;
};
