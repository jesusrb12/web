import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Usuario } from '../model/usuario';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  model: Usuario = new Usuario();
  errorMessage: string;
  loading: boolean = false;

  constructor(private router: Router, private service: LoginService) { }

  ngOnInit() { }

  public login() {
    if (this.model.username == "user" && this.model.password == "123") {
      console.log(JSON.stringify(this.model));
      this.redirectLogin();
    } else
      this.errorMessage = "Usuario y/o password inválidos";


    // this.service.getToken(this.model).subscribe(
    //   usuario => {
    //     console.log("usuario", usuario);
    //     this.redirectLogin();
    //   },
    //   error => {
    //     this.errorMessage = <any>error;
    //     console.log("error login", this.errorMessage);
    //     this.router.navigate(['/mlogin']);
    //   }
    // );
  }

  public redirectLogin() {
    this.router.navigate(['/mestructura/estructura/minicio']);
  }
}
