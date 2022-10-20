import { Component, OnInit } from '@angular/core';
import { CompanyData } from '../models/companyData';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css'],
})
export class ShowProductsComponent implements OnInit {
  products: Product[] = [];
  productSum = 0;
  companyData: CompanyData;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getData();

    this.products = this.productsService.getProducts();
    this.productSum = this.productsService.getSum(this.products);
  }

  private getData(): void {
    this.productsService
      .getData()
      .subscribe(data => this.companyData = data);
  }
}
