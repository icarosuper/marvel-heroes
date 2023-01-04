import axios, { AxiosInstance, AxiosResponse } from "axios";
import {
  HttpRequest,
  HttpResponse,
  IHttpClient,
} from "../../data/http/http-client/httpClient";

export class AxiosHttpClient implements IHttpClient {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });
  }

  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await this.httpClient.request({
        ...data,
        params: {
          ...data.params,
          apikey: process.env.NEXT_PUBLIC_API_KEY,
        },
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return {
      status: axiosResponse.status,
      data: axiosResponse.data,
    };
  }
}
