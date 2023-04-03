import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRequest, ProductResponse } from '../shared/swagger-proxy';

@Injectable({
  providedIn: 'root'
})
export class UpdateProductService {
  private apiUrl = 'api/Products';

  constructor(private http: HttpClient) { }

  getProduct(productId: number): Observable<ProductResponse> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<ProductResponse>(url);
  }

  updateProduct(productId: number, product: ProductRequest): Observable<ProductResponse> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.put<ProductResponse>(url, product);
  }
}
