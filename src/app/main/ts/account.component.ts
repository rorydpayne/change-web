import {Component, OnInit, Input} from "@angular/core";
import {UserService} from "./service/user.service";
import {ProviderService} from "./service/provider.service";
import {Account} from "./model/account";
import {Provider} from "./model/provider";
import {AccountSettings} from "./model/account-settings";

@Component({
  selector: 'account',
  templateUrl: '../view/account.component.html',
  providers: [UserService]
})
export class AccountComponent implements OnInit {
  providers: Provider[];
  accounts: Account[];
  @Input()
  accountSettings: AccountSettings;

  constructor(
    private providerService: ProviderService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getAccountSettings().subscribe(res => {
      this.accountSettings = res;
      if (this.accountSettings.getProviderId()) {
        this.providerService.getAccounts().subscribe(res => {
          this.accounts = res;
        });
      }
      this.providerService.getProviders().subscribe(res => {
        this.providers = res
      });
    });
  }

  updateProvider(): void {
    this.userService.updateAccountSettings(this.accountSettings).subscribe(() => {
      this.providerService.getAccounts().subscribe(res => {
        this.accounts = res;
      });
    });
  }
}
