import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: ProductModel;
  @Output() select = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  sendProductDetails(): void {
    this.select.emit(`${this.product.productName} and ${this.product.quantity}`);
  }

}
