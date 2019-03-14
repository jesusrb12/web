import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Servicio, Cliente, Producto } from '../model/app.servicio';

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
  private servTest: Servicio[]=[];
  public getServicios(): Observable<Servicio[]> {
    // return this.http.get<Servicio[]>(this.servicioUrl + "/servicios").pipe(
    //   catchError(this.handleError('getServicios', [])));
    let sr1: Servicio;

    sr1 = new Servicio();
    sr1.codigo = 1
    sr1.cliente = new Cliente();
    sr1.cliente.codigo = 1;
    sr1.cliente.nombres = "Jesús Rodriguez";
    sr1.cliente.empresa = "CML";
    sr1.producto = new Producto();
    sr1.producto.codigo = 1;
    sr1.producto.descrpcion = "Producto 1";
    sr1.producto.precio = "50.00";
    sr1.monto = "30.00";
    sr1.estado = "0";
    sr1.indSave = "0";
    this.servTest.push(sr1);
    return of(this.servTest as Servicio[]);
  }
}