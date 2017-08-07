import {Injectable} from "@angular/core";
import {CookieService} from "angular2-cookie/core";
@Injectable()
export class TokenService {
  private accessTokenKey: string = 'CHANGE_TOKEN';
  private refreshTokenKey: string = 'CHANGE_REFRESH';

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
}
