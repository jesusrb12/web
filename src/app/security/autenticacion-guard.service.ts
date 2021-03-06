import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router, CanActivate } from '@angular/router';
import { Usuario } from '../model/usuario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuardService implements CanActivate {
  usuario: Usuario;

  constructor(private router: Router) { }

  canActivate() {
    this.usuario = new Usuario();
    this.usuario.token = sessionStorage.getItem('access_Token');
    if (sessionStorage.getItem('access_Token') != null) {
      console.log("token:", sessionStorage.getItem('access_Token'));
      return true
    } else {
      console.log("no hay token");
      this.router.navigate(['/mlogin']);
      return false;
    }
  }
}
