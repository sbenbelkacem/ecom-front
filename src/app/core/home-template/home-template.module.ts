import {NgModule} from "@angular/core";
import {HomeTemplateComponent} from "./container/home-template.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {AppRoutingModule} from "../../app-routing.module";
import {TranslatePipe, TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomeTemplateComponent,
    FooterComponent,
    SideBarComponent,
    NavBarComponent
  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    TranslateModule
  ],
  exports: [
  ]
})
export class HomeTemplateModule {

}
