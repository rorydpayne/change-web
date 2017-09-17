import {Component, OnInit} from "@angular/core";
import {Route, ActivatedRoute, Router} from "@angular/router";
import {ProviderService} from "./service/provider.service";
@Component({
  selector: 'oauth-callback',
  templateUrl: '../view/oauth-callback.component.html',
  providers: []
})
export class OAuthCallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private providerService: ProviderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        let state: string = params['state'];
        let code: string = params['code'];
        let redirect: string = params['redirect'];
        // TODO: handle invalid state error
        this.providerService.authenticate(code, state).subscribe(
          () => this.router.navigateByUrl(redirect)
        );
      });
  }
}
