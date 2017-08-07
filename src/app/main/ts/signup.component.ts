import {Component} from "@angular/core";
import {AuthService} from "./service/auth.service";
import {Router} from "@angular/router";
import {UserSignup} from "./model/user-signup";

@Component({
    selector: 'signup',
    templateUrl: '../view/signup.component.html',
    providers: [AuthService],
    styleUrls: ['./../style/signup.component.scss']
})

export class SignupComponent {

    newUser: UserSignup = new UserSignup();

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    onSubmit(): void {
        this.authService.signup(this.newUser)
            .then(() => {
                this.router.navigate(['']);
            }, (err) => {

            });
    }
}
