import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuario } from '../model/usuario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class LoginService {

  public servicioUrl = 'http://localhost:8080/demo'; // URL to web API
  public usuario: Usuario;

  constructor(private http: HttpClient) { }

  public getToken(usuario: Usuario): Observable<any> {
    // return this.http.post<any>(this.servicioUrl,
    //   JSON.stringify(usuario), httpOptions).pipe(map((res: HttpResponse<any>) => {
    //     console.log("DATA = " + res.headers.get("Authorization"));
    //     if (res.headers.has("Authorization")) {
    //       console.log("DATA = " + res.headers.get("Authorization"));
    //       usuario.token = res.headers.get("Authorization").slice(7);
    //     }
    //     return usuario;
    //   }), catchError(this.handleError))

    this.usuario = new Usuario();
    this.usuario.username = "user"
    this.usuario.password = "123";
    this.usuario.token = "1234";
    return of(this.usuario);
  }
  
  private handleError(error: any) {
    console.log("createOrder error", error); return throwError("lanzando erro: " +
      error);
  }

}
