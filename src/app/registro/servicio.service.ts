import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Servicio, Cliente, Producto } from '../model/app.servicio';
import { Transaccion } from '../model/transaccion';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem('access_Token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public servicioUrl = 'http://jrbcorepayment.azurewebsites.net/api/Debts'; // URL to web API
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
    console.log(sessionStorage.getItem('access_Token'));
    return this.http.get<Servicio[]>(this.servicioUrl + "/ListDebts/1/1", httpOptions).pipe(
      tap((servicios: Servicio[]) => console.log("servicios", JSON.stringify(servicios))),
      catchError(this.handleError('getServicios', [])));
  }

  public create(servicio: Servicio): Observable<Transaccion> {
    return this.http.post<Transaccion>(this.servicioUrl + "/servicio/create",
      JSON.stringify(servicio), httpOptions).pipe(
        tap((transaccion: Transaccion) => console.log(transaccion.codigo)),
        catchError(this.handleError<Transaccion>('create'))
      );
  }

  public deleteServicio(id: number): Observable<Transaccion> {
    return this.http.delete<Transaccion>(this.servicioUrl + "/servicio/delete/" + id, httpOptions).pipe(
      tap((transaccion: Transaccion) => console.log(transaccion.codigo)),
      catchError(this.handleError<Transaccion>('deleteHero'))
    )
  }

  public update(servicio: Servicio): Observable<Transaccion> {
    let service = JSON.stringify(servicio);
    return this.http.post<Transaccion>(this.servicioUrl + "/PayDebt",
      service, httpOptions).pipe(
        tap((transaccion: Transaccion) => console.log(transaccion.codigo)),
        catchError(this.handleError<Transaccion>('update'))
      );
  }

}