import {Component, OnInit, Input} from "@angular/core";
import {AccountSettings} from "./model/account-settings";
import {UserService} from "./service/user.service";
import {Location} from "@angular/common";
@Component({
  selector: 'account-settings',
  templateUrl: '../view/account-settings.component.html',
  providers: [UserService]
})
export class AccountSettingsComponent implements OnInit {
  @Input()
  accountSettings: AccountSettings;
  constructor(private userService: UserService, private location: Location) {}

  ngOnInit(): void {
    this.userService.getAccountSettings().subscribe(res => {
      this.accountSettings = res;
    });
  }

  onSubmit(): void {
    this.userService.updateAccountSettings(this.accountSettings).subscribe(() => {
      this.location.back();
    })
  }
}
