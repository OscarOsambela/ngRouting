import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(`${error.error}`);
    } else {
      console.error(`Error en backend ${error.status}`);
    }
    return throwError(
      () => new Error('Error en la petición de contacto aleatorio')
    );
  }

  getRandomContact(): Observable<any> {
    return this.http.get(environment.url).pipe(
      retry(2), //numero de intentos de peticiones sino aparece error
      catchError(this.handleError)
    );
  }

  getRandomContacts(n: number, sexo?:string): Observable<any> {
    let params: HttpParams = new HttpParams().set('results', n);
    if(sexo){
      params = params.append('gender', sexo)
    }
    return this.http.get(environment.url, {params: params}).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }


}
