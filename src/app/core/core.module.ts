import {NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './module-import-guards';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationGuard} from './guards/authentication.guard';
import {DatePipe, CommonModule} from '@angular/common';
import {EcomTranslateModule} from './translate/ecom-translate.module';
import {HomeTemplateModule} from './home-template/home-template.module';
import {BrowserModule} from '@angular/platform-browser';


/**
 * Only the root AppModule should import the CoreModule
 */


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EcomTranslateModule,
    HomeTemplateModule

  ],
  exports: [
  ],
  providers: [
    AuthenticationGuard,
    DatePipe
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
