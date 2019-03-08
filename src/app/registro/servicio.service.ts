import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Servicio } from '../model/app.servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public servicioUrl = 'http://ec2-18-224-54-25.us-east-2.compute.amazonaws.com:8080/demo'; // URL to web API
  public servicios: Servicio[] = [];
  public servicio: Servicio;
  public errorMessage: string;

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  public getServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.servicioUrl + "/servicios").pipe(
      catchError(this.handleError('getServicios', [])));
  }
}