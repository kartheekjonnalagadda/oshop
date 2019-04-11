import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { Appuser } from "./models/app-user";
import { switchMap } from "rxjs/operators";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private userservice: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute
  ) {
    this.user$ = afAuth.authState;
  }
  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get("retunUrl") || "/";
    localStorage.setItem("returnUrl", returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  get appUser$(): Observable<Appuser> {
    return this.user$.pipe(
      switchMap(user => this.userservice.get(user.uid).valueChanges())
    );
  }
}
