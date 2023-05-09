import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

interface HeaderInterface {
  'Authorization'?: any;
  [name: string]: string | string[];
}

@Injectable()
export class NetworkHelper {
  constructor(private http: HttpClient) { }

  static prepareHttpOptions(customToken?: string): HttpHeaders {
    const headerObj: HeaderInterface = {};

    if (customToken) {
      headerObj.Authorization = customToken;
    }

    return new HttpHeaders(headerObj);
  }

  static prepareHttpParams(jsonData: any): HttpParams {
    let params: HttpParams = new HttpParams();

    if (!(jsonData === undefined || jsonData === null)) {
      const keys = Object.keys(jsonData);
      for (const key of keys) {
        if (Array.isArray(jsonData[key])) {
          for (const data of jsonData[key]) {
            params = params.append(`${key.toString()}[]`, data);
          }
        } else {
          if (jsonData[key] !== undefined && jsonData[key] !== null) {
            params = params.set(key, jsonData[key]);
          }
        }
      }
    }
    return params;
  }

  get<T>(url: string, jsonData?: any, customToken?: string): Observable<T> {
    const headers: any = NetworkHelper.prepareHttpOptions(customToken);
    const params: HttpParams = NetworkHelper.prepareHttpParams(jsonData);

    return this.http.get<T>(url, {headers, params});
  }

  post<T>(url: string, body?: any, jsonData?: any, customToken?: string): Observable<T> {
    const headers: any = NetworkHelper.prepareHttpOptions(customToken);
    const params: HttpParams = NetworkHelper.prepareHttpParams(jsonData);

    return this.http.post<T>(url, body, {headers, params});
  }

  patch<T>(url: string, body?: any, jsonData?: any, customToken?: string): Observable<any> {
    const headers: any = NetworkHelper.prepareHttpOptions(customToken);
    const params: HttpParams = NetworkHelper.prepareHttpParams(jsonData);
    return this.http.patch<T>(url, body, {headers, params});
  }

  getOut<T>(url: string, jsonData?: any): Observable<T> {
    let params: HttpParams = new HttpParams();
    if (!(jsonData === undefined || jsonData === null)) {
      const keys = Object.keys(jsonData);
      for (const key of keys) {
        params = params.set(key, jsonData[key]);
      }
    }
    return this.http.get<any>(url, {params, headers: new HttpHeaders({})});
  }

  put<T>(url: string, data: any, customToken?: string): Observable<any> {
    const headers: any = NetworkHelper.prepareHttpOptions(customToken);
    return this.http.put<T>(url, data, {headers});
  }

  delete<T>(url: string, jsonData: any, bodyData: any, customToken?: string): Observable<any> {
    const headers: any = NetworkHelper.prepareHttpOptions(customToken);

    const body: any = bodyData;
    let params: HttpParams = new HttpParams();
    if (!(jsonData === undefined || jsonData === null)) {
      const keys = Object.keys(jsonData);
      for (const key of keys) {
        if (jsonData[key] !== null) {
          params = params.set(key, jsonData[key]);
        }
      }
    }

    return this.http.request('delete', url, {headers, body, params});
  }
}
