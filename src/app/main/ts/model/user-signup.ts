import {User} from "./user";

export class UserSignup extends User {

    password: string;
    confirmPassword: string;

    constructor() {
        super();
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    getConfirmPassword(): string {
        return this.confirmPassword;
    }

    setConfirmPassword(confirmPassword: string): void {
        this.confirmPassword = confirmPassword;
    }
}
