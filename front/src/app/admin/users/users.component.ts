import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../model/User';
import {HttpClientService} from '../../service/http-client.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<User> = [];
  usersRecieved: User[] = [];
  selectedUser: User = new User;

  action: string | undefined;
  show: boolean = false;

  constructor(private httpClientService: HttpClientService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.refreshData();

  }

  refreshData() {
    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.activatedRoute.queryParams.subscribe(
      params => {
        this.action = params['action'];
        const selectedUserId = params['id'];
        if (selectedUserId) {
          this.selectedUser = this.users.find(user => user.id === +selectedUserId)!;//It tells TypeScript that even though something looks like it could be null, it can trust you that it's not
        }
      }
    );
    this.show = false;
  }

  handleSuccessfulResponse(response: User[]) {
    this.users = response;
  }

  addUser() {
    this.show = true;
    this.selectedUser = new User();
    this.router.navigate(['admin', 'users'], {queryParams: {action: 'add'}});
  }

  viewUser(id: number) {
    this.show = true;
    this.router.navigate(['admin', 'users'], {queryParams: {id, action: 'view'}});
  }

  cancel() {
    this.router.navigateByUrl('admin/users');
  }
}
