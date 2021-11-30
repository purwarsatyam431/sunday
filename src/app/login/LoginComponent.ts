import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  t1;
  t2;
  constructor(private rt: Router) { }

  ngOnInit(): void {
  }
  login() {
    if (this.t1 === "satyam_purwar" && this.t2 === "123456") {
      localStorage.setItem("auth", this.t1);
      console.log("User is loggedIn");
      this.rt.navigate(["condidate"]);
    }
    else {
      alert("please login");
      this.rt.navigate(["Log"]);
    }

  }
  nav() {
    this.rt.navigate(["Register"]);
  }
}
