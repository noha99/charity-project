import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../../service/LoginService";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  toggle: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router,
              public _login: LoginService) {
  }

  ngOnInit(): void {
  }

  toggleSideMenu() {
    this.toggle.emit();
  }

  HandleLogOut($event: MouseEvent) {
    $event.preventDefault();
    this._login.logMeOut();
    this.router.navigate(['register','login']);
  }
}
