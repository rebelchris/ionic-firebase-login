import firebase from "firebase/app";
import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  user = null;
  ref: any;
  count: Observable<any>;

  constructor(
    public fireAuth: AngularFireAuth,
    public db: AngularFireDatabase
  ) {
    this.fireAuth.authState.subscribe((user) => {
      this.user = user ? user : null;
      if (this.user !== null) {
        this.ref = db.object(user.uid);
        this.count = this.ref.valueChanges();
        this.count.subscribe((initial) => {
          if (initial === null) this.ref.set(1);
        });
      }
    });
  }

  login() {
    this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  addCount() {
    this.ref.set(firebase.database.ServerValue.increment(1));
  }

  logout() {
    this.fireAuth.signOut();
  }
}
