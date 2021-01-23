import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from '../product.model';
import {Observable, Subscription} from 'rxjs';
import {ProductsService} from '../products.service';

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

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  sendFromParentToChild(product: ProductModel): void {
    this.product = product;
  }
}
