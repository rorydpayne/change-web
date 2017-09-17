import {Injectable} from "@angular/core";
import {Login} from "../model/login";
import {environment} from "../../../../environments/environment";
import {TokenService} from "./token.service";
import {Http, Headers, URLSearchParams} from "@angular/http";
import {AuthResponse} from "../model/auth-response";
import {UserSignup} from "../model/user-signup";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Injectable()
export class AuthService {
  private headers = new Headers({
    'Authorization': 'Basic ' + btoa(environment.auth.clientId + ':' + environment.auth.clientSecret),
    'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
  });

  constructor(private http: Http,
              private tokenService: TokenService,
              private router: Router,
              private location: Location) {
  }

  public login(login: Login): Promise<AuthResponse> {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', login.email);
    urlSearchParams.append('password', login.password);
    urlSearchParams.append('grant_type', 'password');
    return this.http.post(environment.auth.loginUrl, urlSearchParams.toString(), {headers: this.headers})
      .toPromise()
      .then(res => {
        const authResponse: AuthResponse = new AuthResponse().deserialize(res.json());
        const expireDate: Date = new Date(new Date().getTime() + (1000 * authResponse.getExpiresIn()));
        this.tokenService.storeAccessToken(authResponse.getAccessToken(), expireDate);
        this.tokenService.storeRefreshToken(authResponse.getRefreshToken());
      });
  }

  public signup(userSignUp: UserSignup): Promise<AuthResponse> {
    let heads = new Headers({
      'Content-type': 'application/json'
    });
    return this.http.post(environment.auth.registrationUrl, JSON.stringify(userSignUp), {headers: heads})
      .toPromise()
      .then(res => {
        let login = new Login();
        login.email = userSignUp.getEmail();
        login.password = userSignUp.getPassword();
        this.login(login)
      });
  }

  public providerAuthentication(providerName: string, authUrl: string): void {
    authUrl += '&redirect_uri=' + environment.redirectUri;
    authUrl += '&state=' + this.tokenService.generateStateToken();
    window.location.href = authUrl;
  }

  public authenticate(): Promise<any> {
    let refreshToken: string = this.tokenService.retrieveRefreshToken();
    if (refreshToken == null) {
      this.router.navigateByUrl('/login');
      return Promise.reject(null);
    }
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('grant_type', 'refresh_token');
    urlSearchParams.append('client_id', environment.auth.clientId);
    urlSearchParams.append('refresh_token', refreshToken);
    return this.http.post(environment.auth.loginUrl, urlSearchParams.toString(), {headers: this.headers})
      .toPromise()
      .then(res => {
        const authResponse: AuthResponse = new AuthResponse().deserialize(res.json());
        const expireDate: Date = new Date(new Date().getTime() + (1000 * authResponse.getExpiresIn()));
        this.tokenService.storeAccessToken(authResponse.getAccessToken(), expireDate);
        this.tokenService.storeRefreshToken(authResponse.getRefreshToken());
      }, err => {
        this.router.navigateByUrl('/login');
        return Promise.reject(err);
      });
  }

  public getAccessToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      let token = this.tokenService.retrieveAccessToken();
      if (token) {
        return resolve(token);
      } else {
        this.authenticate().then(this.getAccessToken, reject);
      }
    });
  }

  private getClientAccessToken(): Promise<AuthResponse> {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('grant_type', 'client_credentials');
    return new Promise((resolve, reject) => {
      this.http.post(environment.auth.loginUrl, urlSearchParams.toString(), {headers: this.headers})
        .toPromise()
        .then(res => {
          resolve(new AuthResponse().deserialize(res.json()));
        }, reject);
    });
  }
}
