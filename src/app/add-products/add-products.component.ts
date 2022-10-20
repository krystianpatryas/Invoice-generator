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
export class AddProductsComponent implements OnInit {
  @ViewChild('listForm', { static: false }) listForm: NgForm;

  products: Product[] = [];
  submitted = true;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  submit(form: NgForm): void {
    const productFields = this.getFilledInputs();
    this.submitted = !this.submitted;

    if (productFields.every((productField) => !productField)) {
      return alert('Please add items');
    }

    this.productsService.addProduct(this.listForm.value);
    this.router.navigate(['/show-products']);
  }

  getFilledInputs(): any[] {
    return Object.keys(this.listForm.value).map(
      (keyProduct) => this.listForm.value[keyProduct]
    );
  }

  deleteProduct(index: number): void {
    this.products.splice(index, 1);
  }

  checkInput(event: any): void {
    const allowedChars = /[0-9\/]+/;

    if (!allowedChars.test(event.key)) {
      event.preventDefault();
    }
  }
}
