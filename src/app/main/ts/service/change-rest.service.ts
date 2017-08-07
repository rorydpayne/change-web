import {Http, Headers} from "@angular/http";
import {environment} from "../../../../environments/environment";
import {AuthService} from "./auth.service";
import {TokenService} from "./token.service";
import {Injectable} from "@angular/core";

@Injectable()
export class ChangeRestService {
  constructor(private http: Http, private authService: AuthService) {
  }

  sendGet(url: string, config: any): Promise<any> {
    return this.authService.getAccessToken().then(token => {
      if (!config.headers) {
        config.headers = new Headers();
      }
      config.headers.append('Authorization', `bearer ${token}`);
      return this.http.get(environment.serviceBaseUrl + url, config)
        .toPromise().then(null, err => {
          if (err.status === 401) {
            this.authService.authenticate()
              .then(() => this.sendGet(url, config));
          }
        })
        .catch(this.handleError);
    });
  }

  sendPost(url: string, data: any, config: any): Promise<any> {
    return this.http.post(environment.serviceBaseUrl + url, JSON.stringify(data), config)
      .toPromise()
      .catch(this.handleError);
  }

  sendPut(url: string, data: any, config: any): Promise<any> {
    return this.http.put(environment.serviceBaseUrl + url, JSON.stringify(data), config)
      .toPromise()
      .catch(this.handleError);
  }

  sendDelete(url: string, config: any): Promise<any> {
    return this.http.get(environment.serviceBaseUrl + url, config)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}