import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OAuthModule} from 'angular-oauth2-oidc';
import {HttpRequestInterceptor} from './core/interceptors/http.request.interceptor';
import {AppInitializer} from './core/services/app.initializer';
import {CoreModule} from './core/core.module';
import {FeaturesModule} from './features/features.module';
import {CommonModule} from '@angular/common';
import {HomeTemplateModule} from './core/home-template/home-template.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FeaturesModule,
    TranslateModule,
    OAuthModule.forRoot({resourceServer: {allowedUrls: ['/product-api', '/order-api'], sendAccessToken: true}})
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (initService: AppInitializer) => () => initService.initApplication(),
      deps: [AppInitializer],
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
