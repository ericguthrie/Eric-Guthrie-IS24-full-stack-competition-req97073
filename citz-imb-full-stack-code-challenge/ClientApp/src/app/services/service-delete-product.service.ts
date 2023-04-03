import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductResponse } from '../shared/swagger-proxy';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductService {
  private apiUrl = 'api/Products';

  constructor(private http: HttpClient) { }

  deleteProductById(productId: number): Observable<ProductResponse> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.delete<ProductResponse>(url);
  }
}
