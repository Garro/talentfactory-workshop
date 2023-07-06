import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';

export const enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor() {}

  public async request(
    url: string,
    method: HttpMethod = HttpMethod.Get,
    options?: HttpOptions,
  ) {
    const httpOptions: HttpOptions = { ...options, url, method };

    console.info('[HTTP]', httpOptions);
    try {
      const response = await CapacitorHttp.request(httpOptions);
      return response.data;
    } catch (error) {
      this.errorHandle(error);
    }
    return;
  }

  private errorHandle(error: unknown): void {
    console.error('[HTTP ERROR]', error);
    throw error;
  }
}
