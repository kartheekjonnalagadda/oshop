import { Appuser } from "./../models/app-user";
import { AuthService } from "./../auth.service";
import { Component } from "@angular/core";

@Component({
  selector: "bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.css"]
})
export class BsNavbarComponent {
  appUser: Appuser;
  constructor(public auth: AuthService) {
    auth.appUser$.subscribe(user => (this.appUser = user));
  }

  logout() {
    this.auth.logout();
  }
}
