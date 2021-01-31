import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from '../product.model';
import {Observable, Subscription} from 'rxjs';
import {ProductsService} from '../products.service';
import {Router} from '@angular/router';
import {ProductDetailComponent} from '../product-detail/product-detail.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: ProductModel[];
  product: ProductModel;
  products$: Observable<ProductModel> = this.service.getAllProducts();
  sub: Subscription;

  constructor(private service: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  sendFromParentToChild(product: ProductModel): void {
    this.product = product;
  }
  modifyProduct(product: ProductModel): void {
    this.router.navigate([`/add`]);
  }
}
