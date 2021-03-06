import { UserService } from "./user.service";
import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "oshop";
  constructor(
    private userService: UserService,
    private auth: AuthService,
    private route: Router
  ) {
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);
        let retunUrl = localStorage.getItem("returnUrl");
        route.navigateByUrl(retunUrl);
      }
    });
  }
}
