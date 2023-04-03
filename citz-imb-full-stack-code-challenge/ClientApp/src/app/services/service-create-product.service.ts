import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRequest, ProductResponse } from '../shared/swagger-proxy';

@Injectable({
  providedIn: 'root'
})
export class CreateProductService {
  private apiUrl = 'api/Products';

  constructor(private http: HttpClient) { }

  createProduct(product: ProductRequest): Observable<ProductResponse> {
    return this.http.post<ProductResponse>(this.apiUrl, product);
  }
}
