import {Injectable} from "@angular/core";
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {environment} from "../../../../environments/environment";
import {TokenService} from "./token.service";

@Injectable()
export class AuthenticatedHttpService extends Http {
  constructor(backend: XHRBackend,
              defaultOptions: RequestOptions,
              private authService: AuthService,
              private tokenService: TokenService) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options).catch((error: Response) => {
      if (error.status === 401) {
        if (this.getAuthRealm(error.headers.get("www-authenticate")) === "changevest") {
          this.authService.authenticate().then(() => {
            return this.request(url, options);
          }, (error) => {
            return Observable.throw(error);
          });
        } else {
          let realm: string = this.getAuthRealm(error.headers.get("www-authenticate"));
          let redirectUrl: string = error.headers.get("location");
          this.authService.providerAuthentication(realm, redirectUrl)
        }
      } else {
        return Observable.throw(error);
      }
    });
  }

  getAuthRealm(wwwAuthHeaderString: string): string {
    let matcher = new RegExp("realm=\"(.*?)\"");
    return matcher.exec(wwwAuthHeaderString)[1];
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.get(url, this.getRequestOptionArgs(options));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.post(url, body, this.getRequestOptionArgs(options));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.put(url, body, this.getRequestOptionArgs(options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.delete(url, this.getRequestOptionArgs(options));
  }

  private updateUrl(req: string) {
    return  environment.serviceBaseUrl + req;
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    options.headers.append('Content-Type', 'application/json');
    options.headers.append('Authorization', 'bearer ' + this.tokenService.retrieveAccessToken())

    return options;
  }
}
