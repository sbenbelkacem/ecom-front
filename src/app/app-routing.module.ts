import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeTemplateComponent} from './core/home-template/container/home-template.component';
import {AuthenticationGuard} from './core/guards/authentication.guard';
import {ProductDashboardComponent} from './features/product-dashboard/product-dashboard.component';
import {OrderDashboardComponent} from './features/order-dashboard/order-dashboard.component';


const appRoutes: Routes = [

  {
    path: '', component: HomeTemplateComponent,

    children: [
      {
        path: 'products',
        component: ProductDashboardComponent,
      },
      {
        path: 'orders',
        component: OrderDashboardComponent
      }
    ],
  },
  {path: '**', component: HomeTemplateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
