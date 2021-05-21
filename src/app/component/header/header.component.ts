import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/shared/auth.service';
import { UserService } from '../../service/user/user.service';
import { LocalizationService } from '../../service/localization/localization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  username: string;

  constructor(private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private localizationService: LocalizationService) { }

  getLocale() {
    var locale = this.userService.getLocale();
    if(locale === null){
      this.setLocale('EN');
    }
    if (locale === 'EN') {
      return 'GB';
    }
    return locale;
  }

  setLocale(locale: string) {
    this.userService.setLocale(locale);
    this.ngOnInit();
  }

  ngOnInit() {
    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    this.authService.username.subscribe((data: string) => this.username = data);
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getUserName();
  }

  goToUserProfile() {
    this.router.navigateByUrl('/user-profile/' + this.username);
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('').then(() => {
      window.location.reload();
    })
  }

  getLocalizedSignUp(): string {
   return this.localizationService.getSignUp();
 }
}
