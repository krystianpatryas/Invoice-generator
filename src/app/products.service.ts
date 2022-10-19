import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { url } from './globals/database-url.component';
import { CompanyData } from './models/companyData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  getSum(products: Product[]): number {
    let productSum = 0;
    products.forEach((product) => {
      productSum += (product.price * product.count);
    });
    return productSum;
  }

  public getData(): Observable<CompanyData> {
    return this.http.get<CompanyData>(url)
  }
}
