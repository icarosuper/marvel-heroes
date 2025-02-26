export type HttpRequest = {
  url: string;
  method: HttpMethod;
  data?: any;
  headers?: any;
  params?: any;
};

export interface IHttpClient {
  request: <T = any>(data: HttpRequest) => Promise<HttpResponse<T>>;
}

export type HttpMethod = "post" | "get" | "put" | "patch" | "delete";

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  data: T;
};
