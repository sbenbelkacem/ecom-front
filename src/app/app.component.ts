import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {OAuthService} from 'angular-oauth2-oidc';
import {authCodeFlowConfig} from './auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private oauthService: OAuthService) {

    // this.oauthService.events
    //   .pipe(filter(e => e.type === 'token_received'))
    //   .subscribe(_ => {
    //     console.log('token received');
    //   });
  }

  ngOnInit() {
    // this.oauthService.configure(authCodeFlowConfig);
    // this.oauthService.setupAutomaticSilentRefresh();
    // this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  get userName(): string {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['given_name'];
  }

  get idToken(): string {
    return this.oauthService.getIdToken();
  }

  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }

  refresh() {
    this.oauthService.refreshToken();
  }
}
