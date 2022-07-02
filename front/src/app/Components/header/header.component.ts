import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../service/LoginService";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
              public _login: LoginService) { }

  ngOnInit(): void {
  }

  HandleLogOut($event: MouseEvent) {
    $event.preventDefault();
    this._login.logMeOut();
    this.router.navigate(['home']);
  }
}
