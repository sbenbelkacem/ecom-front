import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {OAuthService} from 'angular-oauth2-oidc';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  userName: string;
  firstName: string;
  lastName: string;
  selectedLanguage: string;

  constructor(private router: Router,
              private translateService: TranslateService,
              private oauthService: OAuthService) {
    this.selectedLanguage = "fr";
    this.oauthService.events
      .pipe(filter(e => e.type === 'token_received'))
      .subscribe(_ => {
        this.firstName = this.oauthService.getIdentityClaims()['preferred_username'];
      });
  }

  ngOnInit() {


  }


  logout() {
    this.oauthService.logOut();

  }

  updateSelectedLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.translateService.use(lang);
  }

}
