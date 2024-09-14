import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user!: string;
  _password!: string;

  constructor(private _loginService: LoginService, private _router: Router){}

  doLogin(){
    this._loginService.login(this.user, this._password);
    this._router.navigate(['/restrito/lista']);
    this._loginService.setMostraMenu(false);
  }

}
