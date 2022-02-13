import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {OAuthService} from "angular-oauth2-oidc";


@Injectable()
export class AuthenticationGuard implements CanActivate {


  constructor(private oauthService: OAuthService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    return true;
  }

}
