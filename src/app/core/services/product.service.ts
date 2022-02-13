import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductModel} from '../models/product.model';
import {OrderModel} from '../models/order.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly http: HttpClient) {
  }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('/product-api/products');
  }
}
