import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../product.model';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  @Input() product: ProductModel;
  @Output() select = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      product: this.formBuilder.group({
        codWarehouse: ['',[Validators.required, Validators.minLength(4)]],
        nameWarehouse: [''],
        productCod: [''],
        categoryName: [''],
        productName: [''],
        quantity: [''],
        unit: [''],
        notes: ['']
      })
    });
  }
  sendProductDetails(): void {
    this.select.emit(`${this.product.productName} and ${this.product.quantity}`);
  }

  onSubmit(): void {
      console.log('Handling the submit button');
      console.log(this.checkoutFormGroup.get('product').value);
      console.log('Product name is: ' + this.checkoutFormGroup.get('product').value.productName);
  }
}
