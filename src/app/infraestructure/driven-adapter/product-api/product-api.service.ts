import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsGateway } from 'src/app/domain/models/product/gateway/products-gateway';
import { Product } from 'src/app/domain/models/product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService extends ProductsGateway {
  private API_SERVER = 'http://localhost:8080/api/v1/estado/';

  constructor(private httpClient: HttpClient) {
    super();
  }

  public create(prod: Product): Observable<void> {
    return this.httpClient.post<void>(this.API_SERVER, prod);
  }

  public update(prod: Product): Observable<void> {
    return this.httpClient.post<void>(this.API_SERVER, prod);
  }

  public delete(id: string): Observable<Boolean> {
    return this.httpClient.delete<Boolean>(this.API_SERVER + '/' + id);
  }

  public findById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(this.API_SERVER + '/' + id);
  }

  public findAll(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(this.API_SERVER);
  }

  public findAllByBrand(brand: string): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(this.API_SERVER+'/'+brand);
  }
}
