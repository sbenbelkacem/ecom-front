import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitializer {


  constructor(private translateService: TranslateService) {
  }

  public initApplication() {
    this.translateService.setDefaultLang('fr');
    this.translateService.use('fr');
    console.log('application init');

  }
}
