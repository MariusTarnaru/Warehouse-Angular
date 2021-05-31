import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../products.service';
import {ProductModel} from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: ProductModel;

  constructor(private productService: ProductsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.productService.getProductById(params.id).subscribe(
        result => {
          console.log(result);
          this.product = result;
        },
        error => {
          console.log(error);
        }
      );
    });
  }

}
