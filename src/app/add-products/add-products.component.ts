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
  @ViewChild('listForm', { static: false }) signupForm: NgForm;
  products: Product[] = [];
  submitted = false;
  status = false;

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }


  product: Product;

  submit(form: NgForm) {
    const name = this.signupForm.value.name;
    const count = this.signupForm.value.count;
    const price = this.signupForm.value.price;

    const productFields = [name, count, price];

    if (productFields.filter((productField) => !!productField)) {
      console.log('dupa');
    }

    if (!name && !count && !price) {
      alert('Please add items');
      return;
    }

    this.submitted = true;
    this.productsService.add({ name, count, price }); // add
    // this.products.push({ name, count, price });
    this.router.navigate(['/show-products'])

  }

  delete(index: number) {
    this.products.splice(index, 1);
  }
}
