import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

const routes: Routes = [

  {path: 'add', component: ProductDetailComponent},
  {path: 'products', component: ProductsComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', component: ProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
