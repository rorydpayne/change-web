import {Component, Input} from "@angular/core";
import {AuthService} from "./service/auth.service";
import {Router} from "@angular/router";

import {Login} from "./model/login";

@Component({
  selector: 'login',
  templateUrl: '../view/login.component.html',
  providers: [AuthService]
})

export class LoginComponent {

  login: Login = new Login();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.authService.login(this.login)
      .then(() => {
        this.router.navigate(['']);
      }, (err) => {

      });
  }
}
