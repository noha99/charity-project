import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
import {User} from 'src/app/model/User';
import {HttpClientService} from 'src/app/service/http-client.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input()
  user: User = new User(); //take new user as an input

  users :User[] = [];
  selectedUser: User = new User;

  isExist:boolean = false;
  isSignup: boolean = false;
  checked: boolean = false;
  msgs: string= '';


  constructor(private router: Router,
              private http : HttpClient,
              private httpClientService: HttpClientService) {
  }

  ngOnInit(): void {
    this.httpClientService.getUsers().subscribe(
      response => this.users = response
    );
  }

  login(e: MouseEvent) {
    this.router.navigateByUrl('/register/login');
  }

  signup() {
   // @ts-ignore
    if(this.user.name == null){
      this.checked = true;
      this.msgs = 'name is required';
    }
    else if(this.user.email == null){
      this.checked = true;
      this.msgs = 'email is required';
    }
    else if(this.user.password == null){
      this.checked = true;
      this.msgs = 'password is required';
    }
    else{
      this.checked = false;
      this.selectedUser =  this.users.find(u => u.email === this.user.email)!;
      if(this.selectedUser){
        this.isExist = true;
        this.selectedUser = new User();
        this.msgs = 'this email already exists';

      }
      else{
        this.httpClientService.signUpUser(this.user).subscribe(
          (user) => {
            this.isSignup = true;
            this.router.navigate(['home']);
          }
        );
      }

    }
    console.log(this.user);
  }



}
