import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {environment} from "../../../../environments/environment";
import 'rxjs/add/operator/toPromise';
import {TokenService} from "./token.service";
import {ChangeRestService} from "./change-rest.service";

@Injectable()
export class UserService {

  constructor(
    private changeService: ChangeRestService
  ) {}

  public getUser(): Promise<any> {
    return this.changeService.sendGet('/me', {})
      .then(res => res ? res.json().data : null)
      .catch((err: any) => {
        console.error('An error occurred', err); // for demo purposes only
        return Promise.reject(err);
      })
  }
}
