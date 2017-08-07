import {environment} from "../../../../environments/environment";
export class Login {
    private client_id: string;
    public email: string;
    public password: string;
    constructor() {
        this.client_id = environment.auth.clientId;
        this.email = this.password = '';
    }
}
