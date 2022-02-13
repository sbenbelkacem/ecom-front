import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  baseTitle: string;
}


export const ROUTES: RouteInfo[] = [
  {path: '/products', title: 'PRODUCTS', icon: 'ti-panel', class: '', baseTitle: 'PRODUCTS'},
  {path: '/orders', title: 'ORDERS', icon: 'ti-panel', class: '', baseTitle: 'ORDERS'}
];


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {

  sideBarItems: RouteInfo[] = [];
  appVersion = 'V1';

  constructor(private translateService: TranslateService) {
    this.translateService.use("fr");
  }

  ngOnInit() {

    for (let i = 0; i < ROUTES.length; i++) {
      this.sideBarItems.push(ROUTES[i]);
    }

  }

}
