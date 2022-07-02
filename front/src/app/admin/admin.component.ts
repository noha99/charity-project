import {Component, OnInit} from '@angular/core';
import {User} from '../model/User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  sidebar: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  sideBar(){
    this.sidebar=! this.sidebar;
  }
}
