import { Injectable } from '@angular/core';
import { Product } from '../models/product/product.model';
import { ProductsGateway } from '../models/product/gateway/products-gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class getProductUseCase {
  constructor(private productGateway: ProductsGateway) {}

  //create(prod: Product): Observable<void>;
  //update(prod: Product): Observable<void>;

  delete(id: string): Observable<Boolean> {
    return this.productGateway.delete(id);
  }
  findById(id: string): Observable<Product> {
    return this.productGateway.findById(id);
  }
  findAll(): Observable<Array<Product>> {
    return this.productGateway.findAll();
  }
  findAllByBrand(brand: string): Observable<Array<Product>> {
    return this.productGateway.findAllByBrand(brand);
  }
}
