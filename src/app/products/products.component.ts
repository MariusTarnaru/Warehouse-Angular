import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from '../product.model';
import {Observable, Subscription} from 'rxjs';
import {ProductsService} from '../products.service';
import {Router} from '@angular/router';

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
  productDetails: any;

  constructor(private service: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
   // this.sub.unsubscribe();
  }
  sendFromParentToChild(product: ProductModel): void {
    this.product = product;
  }
  modifyProduct(): void {
    this.service.modifyProduct(this.product);
    alert('This task is in progress !!!');
  }

  getProductById(): void {
    this.service.getProductById(this.product);
  }

  goToPage(page): void {
    this.router.navigate([page]);
  }
}
