import {AuthenticatedHttpService} from "./authenticated-http.service";
import {Observable} from "rxjs";
import {Account} from "../model/account";
import {Provider} from "../model/provider";
import {Injectable} from "@angular/core";
import {TokenService} from "./token.service";
import {RequestOptions, RequestOptionsArgs, URLSearchParams} from "@angular/http";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";

@Injectable()
export class ProviderService {
  constructor(
    private http: AuthenticatedHttpService,
    private tokenService: TokenService
  ) {}

  public getAccounts(): Observable<Account[]> {
    return this.http.get("/provider/accounts", {})
      .map(res => {
        let accounts: Account[] = [];
        res.json().forEach((account) => {
          accounts.push(new Account().deserialize(account));
        });
        return accounts;
      });
  }

  public getProviders(): Observable<Provider[]> {
    return this.http.get("/providers", {})
      .map(res => {
        let providers: Provider[] = [];
        res.json().forEach((provider) => {
          providers.push(new Provider().deserialize(provider));
        });
        return providers;
      });
  }

  public authenticate(code: string, state: string): Observable<any> {
    if (this.tokenService.retrieveStateToken() === state) {
      let params: URLSearchParams = new URLSearchParams();
      params.set('code', code);
      params.set('redirect_uri', environment.redirectUri);
      let requestOptions = new RequestOptions();
      requestOptions.search = params;
      return this.http.post('/provider/authenticate', null, requestOptions);
    } else {
      return Observable.throw(new Error('invalid state'));
    }
  }
}
