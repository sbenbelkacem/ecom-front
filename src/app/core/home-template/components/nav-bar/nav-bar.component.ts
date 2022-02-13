import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {OAuthService} from 'angular-oauth2-oidc';


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
