import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Routes = [

  {path: 'productDetails', component: ProductDetailsComponent},
  {path: 'products', component: ProductsComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', component: ProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
