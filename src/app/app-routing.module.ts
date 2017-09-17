import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./main/ts/login.component";
import {HomeComponent} from "./main/ts/home.component";
import {SignupComponent} from "./main/ts/signup.component";
import {AccountSettingsComponent} from "./main/ts/account-settings.component";
import {AccountComponent} from "./main/ts/account.component";
import {OAuthCallbackComponent} from "./main/ts/oauth-callback.component";

const routes: Routes = [{
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: SignupComponent
  },
  {
    path: 'settings',
    component: AccountSettingsComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'oauth/provider-callback',
    component: OAuthCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

