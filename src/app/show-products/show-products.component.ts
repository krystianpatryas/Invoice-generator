import { Component, OnInit } from '@angular/core';
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
  companyData: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getData();
    this.products = this.productsService.getProducts();
    this.productSum = this.productsService.getSum(this.products);
  }

  private getData() {
    this.productsService.getData()
    .subscribe(data => this.companyData = data)
  };
}
