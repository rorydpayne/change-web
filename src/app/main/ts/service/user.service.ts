import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import {AccountSettings} from "../model/account-settings";
import {MonetaryAmount} from "../model/monetary-amount";
import {AuthenticatedHttpService} from "./authenticated-http.service";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  constructor(
    private http: AuthenticatedHttpService
  ) {}

  public getUser(): Observable<any> {
    return this.http.get('/me', {})
      .map(res => res ? res.json().data : null)
  }

  public getAccountSettings(): Observable<AccountSettings> {
    return this.http.get('/account-settings', {})
      .map(res => {
        return new AccountSettings().deserialize(res.json());
      });
  }

  public updateAccountSettings(accountSettings: AccountSettings): Observable<AccountSettings> {
    return this.http.put('/account-settings', JSON.stringify(accountSettings))
      .map(res => {
        return new AccountSettings().deserialize(res.json());
      });
  }
}
