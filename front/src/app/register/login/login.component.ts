import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClientService} from 'src/app/service/http-client.service';
import {User} from "../../model/User";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../../service/LoginService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  user: User = new User(); //take new user as an input

  users: User[] = [];
  selectedUser: User = new User;

  isExist: boolean = true;
  // isLogin: boolean = false;
  checked: boolean = false;
  msgs: string = '';


  constructor(private router: Router,
              private http: HttpClient,
              private httpClientService: HttpClientService,
              private _loginService : LoginService) {
  }

  ngOnInit(): void {
    this.httpClientService.getUsers().subscribe(
      response => this.users = response
    );
  }


  login(email: string, password: string) {
    if (this.user.email == null) {
      this.checked = true;
      this.msgs = 'email is required';
    } else if (this.user.password == null) {
      this.checked = true;
      this.msgs = 'password is required';
    } else {
      this.checked = false;
      this.selectedUser = this.users.find(u => u.email === email)!;
      if (this.selectedUser) {
        if (this.selectedUser.password === password) {
          this.isExist = true;
          if (this.selectedUser.type == 'user') {
            this._loginService.LogMeIn(this.selectedUser.id.toString(),this.selectedUser.name,this.selectedUser.type);
            this.router.navigate(['home']);
          } else if (this.selectedUser.type == 'admin') {
            this._loginService.LogMeIn(this.selectedUser.id.toString() , this.selectedUser.name,this.selectedUser.type);
            this.router.navigate(['admin']);
          }
        } else {
          this.isExist = false;
          this.selectedUser = new User();
          this.msgs = 'username or password is incorrect';
        }
      } else {
        this.isExist = false;
        this.selectedUser = new User();
        this.msgs = 'username or password is incorrect';
      }
      // }
      // else {
      // this.isLogin = true;
      // this.router.navigate(['admin', 'users']);
      // }

      }
      console.log(this.user);
    }


    signup()
    {
      this.router.navigateByUrl('/register/signup');
    }

  }
