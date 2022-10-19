import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent implements OnInit{
  @ViewChild('listForm', { static: false }) listForm: NgForm;
  product: Product;
  products: Product[] = [];
  // submitted = false;
  nameStatus = false;

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();

  }

  submit(form: NgForm) {
    const name = this.listForm.value.name;
    const count = this.listForm.value.count;
    const price = this.listForm.value.price;
    const productData = {name, count, price};
    const productFields = [name, count, price];

    if(productFields.every(productField => !productField)) {
      return alert('Please add items')
    }

    if (name.length < 3 || name.length > 30) {
      this.nameStatus = true; console.log(this.nameStatus)
    }

    this.productsService.addProduct(productData);
    this.router.navigate(['/show-products']);
    // this.submitted = !this.submitted;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}
