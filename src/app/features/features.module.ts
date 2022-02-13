import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {ProductDashboardComponent} from './product-dashboard/product-dashboard.component';
import {OrderDashboardComponent} from './order-dashboard/order-dashboard.component';

@NgModule({
  declarations: [ProductDashboardComponent, OrderDashboardComponent],

  imports: [
    CommonModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class FeaturesModule {

}
