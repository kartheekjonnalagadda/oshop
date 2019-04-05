import { AuthService } from "./../auth.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login();
  }
}
