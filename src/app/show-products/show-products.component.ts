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
  sum = 0;
  companyData: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getData()
    console.log('init');
    this.products = this.productsService.getProducts();
    this.sum = this.productsService.getSum(this.products);
  }

  private getData() {
    this.productsService.getData().subscribe(
      (data) => { this.companyData = data
      console.log(this.companyData.name)
    })


  }
}
