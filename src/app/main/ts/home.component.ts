import {Component, OnInit} from "@angular/core";
import {UserService} from "./service/user.service";
@Component({
  selector: 'home',
  templateUrl: '../view/home.component.html',
  providers: [UserService]
})

export class HomeComponent implements OnInit {
  user: any;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUser()
      .subscribe((res: any) => {
        this.user = res;
      });
  }

}
