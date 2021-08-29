import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LoguerService } from '../loguer.service';
import { User } from '../user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoguerService],
})
export class LoginComponent {
  @ViewChild('signIn') signIn?: ElementRef;
  @ViewChild('signUp') signUp?: ElementRef;
  subscription: Subscription;
  logged: boolean;
  SignInActive: boolean;

  constructor(private logger: LoguerService, private router: Router) {
    this.SignInActive = true;
    this.logged = false;
    this.logger.Logout();
    this.subscription = logger.logged$.subscribe((log) => {
      if (log) this.logged = true;
    });
  }

  ngAfterViewInit() {
    console.log(this.signIn);
    if (this.signIn) console.log(this.signIn.nativeElement);
  }

  handlerSignInSignUp() {
    this.SignInActive
      ? (this.SignInActive = false)
      : (this.SignInActive = true);
  }

  Log(mail: string, pass: string) {
    if (this.SignInActive) this.logger.Log(new User(mail, pass));
    else this.logger.New(new User(mail, pass));
    if (this.logged) this.router.navigate(['ej2']);
    else this.router.navigate(['ej2/error']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
