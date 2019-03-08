import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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

  public getToken(usuario: Usuario) {
    this.usuario = new Usuario();
    this.usuario.username = "user"
    this.usuario.password = "123";
    this.usuario.token = "1234";

    return this.usuario;
  }
}
