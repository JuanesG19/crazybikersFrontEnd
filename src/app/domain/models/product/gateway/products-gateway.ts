import { Observable } from 'rxjs';
import { Product } from '../product.model';

export abstract class ProductsGateway {
  abstract create(prod: Product): Observable<void>;
  abstract update(prod: Product): Observable<void>;
  abstract delete(id: string): Observable<Boolean>;
  abstract findById(id: string): Observable<Product>;
  abstract findAll(): Observable<Array<Product>>;
  abstract findAllByBrand(brand: string): Observable<Array<Product>>;
}
