import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLogin: boolean = false;
  user_id: any ;
  FullName: string | null;
  Type: string | null;

  constructor() {
    this.user_id = localStorage.getItem("user_id");
    this.FullName = localStorage.getItem("fullname");
    this.Type = localStorage.getItem("type");
    if (this.FullName != null && this.Type != null) {
      this.isLogin = true;
    }

  }


  IsLogin(): boolean {
    return this.isLogin;
  }

  LogMeIn(user_id : string, FullName: string , Type: string) {
    this.isLogin = true;
    this.user_id =  user_id ;
    this.FullName = FullName;
    this.Type = Type;
    localStorage.setItem("user_id" , this.user_id);
    localStorage.setItem("fullname", this.FullName);
    localStorage.setItem("type", this.Type);


  }

  logMeOut() {
    this.FullName = '';
    this.Type = '';
    this.isLogin = false;
    localStorage.clear();
  }
}
