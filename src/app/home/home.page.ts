import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isUserLoggedIn: any = false;
  userInfo: any = {};

  constructor() {}
  register() {
    ( window as any).AccountKitPlugin.loginWithPhoneNumber({
      useAccessToken: true,
      defaultCountryCode: 'IN',
      facebookNotificationsEnabled: true,
    }, data => {
      this.isUserLoggedIn = true;
      ( window as any).AccountKitPlugin.getAccount( info => {
        this.userInfo = info;
       }, error => console.log(error));
    },
    error => console.log(error)
    );
  }
  logout() {
    (window as any ).AccountKitPlugin.logout();
    setTimeout(() => {
      this.register();
    }, 3000);
  }

}
