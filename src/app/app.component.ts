import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

import * as firebase from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "oshop";
  items: Observable<any[]>;
  constructor(private afAuth: AngularFireAuth) {}
  // login() {
  //   this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  // }
}
