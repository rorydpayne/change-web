import {Injectable} from "@angular/core";
import {CookieService} from "angular2-cookie/core";
@Injectable()
export class TokenService {
  private accessTokenKey: string = 'CHANGE_TOKEN';
  private refreshTokenKey: string = 'CHANGE_REFRESH';
  private stateTokenKey: string = 'CHANGE_STATE';

  constructor(
      private cookieService: CookieService
  ) { }

  public storeAccessToken(value: string, expiry: Date): void {
    this.cookieService.put(this.accessTokenKey, value, {expires: expiry});
  }

  public storeRefreshToken(value: string): void {
    this.cookieService.put(this.refreshTokenKey, value);
  }

  public retrieveAccessToken(): string {
    return this.cookieService.get(this.accessTokenKey);
  }

  public retrieveRefreshToken(): string {
    return this.cookieService.get(this.refreshTokenKey);
  }

  public generateStateToken(): string {
    let value = this.guid();
    this.cookieService.put(this.stateTokenKey, value);
    return value;
  }

  public retrieveStateToken(): string {
    return this.cookieService.get(this.stateTokenKey);
  }

  private guid(): string {
  return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
    this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }
  private s4(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}
