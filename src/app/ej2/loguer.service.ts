import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class LoguerService {
  private loggedSource = new Subject<boolean>();
  private errorSource = new Subject<boolean>();
  users: Array<User>;
  constructor() {
    let admin = new User('admin@gmail.com', 'admin');
    let user = new User('user@gmail.com', 'user');
    this.users = [];
    this.users.push(admin);
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  logged$ = this.loggedSource.asObservable();
  error$ = this.errorSource.asObservable();

  private changeLogState(log: boolean) {
    this.loggedSource.next(log);
  }

  private changeErrorState(state: boolean) {
    this.errorSource.next(state);
  }

  Log(user: User) {
    this.users.forEach((u) => {
      if (u.mail === user.mail && u.pass === user.pass) {
        this.changeLogState(true);
      }
    });
  }

  Logout() {
    this.changeLogState(false);
    this.changeErrorState(false);
  }

  New(user: User) {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.changeLogState(true);
  }
}
