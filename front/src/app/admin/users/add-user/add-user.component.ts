import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from 'src/app/model/User';
import {HttpClientService} from 'src/app/service/http-client.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Input()
  user!: User; //take new user as an input

  @Output()
  userAddedEvent = new EventEmitter(); //send new user to page to display

  newUser: User = new User;
  // message!: string;
  // password!: string;

  // clicked: boolean = false;
  msgs: string = '';
  checked: boolean = false;
  isExist: boolean = false;
  selectedUser: User = new User();
  users: User[] = [];
  action: string='';

  constructor(private httpClientService: HttpClientService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.httpClientService.getUsers().subscribe(
      response => this.users = response
    );
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
      }
    );

    this.newUser = Object.assign({}, this.user);
  }

  addUser() {
    if (this.user.name == null) {
      this.checked = true;
      this.msgs = 'name is required';
    } else if (this.user.email == null) {
      this.checked = true;
      this.msgs = 'email is required';
    } else if (this.user.type == null) {
      this.checked = true;
      this.msgs = 'type is required';
    } else if (this.user.password == null) {
      this.checked = true;
      this.msgs = 'password is required';
    } else {
      this.checked = false;
      this.selectedUser = this.users.find(u => u.email === this.user.email)!;
      if (this.selectedUser && this.action != 'edit') {
        this.isExist = true;
        this.selectedUser = new User();
        this.msgs = 'this email already exists';
      } else {
        if (this.user.id == null ) {
          this.httpClientService.addUser(this.user).subscribe(
            (user) => {
              // this.clicked = true;
              this.userAddedEvent.emit();
              this.router.navigate(['admin', 'users']);
            }
          );
        } else {
          this.httpClientService.updateUser(this.user).subscribe(
            (user) => {
              this.userAddedEvent.emit();
              this.router.navigate(['admin', 'users']);
            }
          );
        }

      }
    }
  }
}
