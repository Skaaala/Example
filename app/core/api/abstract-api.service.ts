import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api/api.service';

declare let CONFIG;

export const BASE_URL = (typeof CONFIG !== 'undefined' && CONFIG.apiUrl) || environment.domain + '/api/v1/';

export abstract class AbstractApiService {
  protected constructor(protected apiService: ApiService, protected http: HttpClient) {}

  protected httpDelete<T>(path: string): Observable<T> {
    return this.http.delete<T>(this.url(path), this.options());
  }

  protected httpGet<T>(path: string, options?: { params: { [param: string]: string } }): Observable<T> {
    return this.http.get<T>(this.url(path), { ...this.options(), ...options });
  }

  protected httpGetBlob(path: string, options?: { params: { [param: string]: string } }): Observable<Blob> {
    return this.http.get(this.url(path), { responseType: 'blob', ...this.options(), ...options });
  }

  protected httpPatch<T>(path: string, body?: any): Observable<T> {
    return this.http.patch<T>(this.url(path), body, this.options());
  }

  protected httpPost<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(this.url(path), body, this.options());
  }

  protected httpPut<T>(path: string, body: any): Observable<T> {
    return this.http.put<T>(this.url(path), body, this.options());
  }

  protected httpHeaders(): HttpHeaders {
    const headers = this.apiService.headers;
    return headers;
  }

  protected options(): { headers: HttpHeaders } {
    return {
      headers: this.httpHeaders()
    };
  }

  protected abstract url(path: string);
}
