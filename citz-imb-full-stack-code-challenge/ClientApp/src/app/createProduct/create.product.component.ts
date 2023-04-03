import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateProductService } from '../services/service-create-product.service';
import { ProductRequest, ProductResponse } from '../shared/swagger-proxy';

@Component({
  selector: 'app-create-product',
  templateUrl: './create.product.component.html',
  styleUrls: ['./create.product.component.scss']
})
export class CreateProductComponent {
  product: ProductRequest = new ProductRequest();
  developers: string[] = [];
  developerName: string = '';
  errorMessage: string = '';

  addDeveloper(): void {
    const maxDevelopers = 5;
    const newDeveloper = this.developerName.trim();

    if (!newDeveloper) {
      this.errorMessage = `Please enter a valid developer name.`;
    } else if (this.developers.length < maxDevelopers) {
      this.developers.push(newDeveloper);
      this.developerName = '';
    } else {
      this.errorMessage = `Maximum of ${maxDevelopers} developers reached.`;
    }
  }

  removeDeveloper(index: number): void {
    this.developers.splice(index, 1);
  }

  constructor(private productService: CreateProductService, private router: Router) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const data = {
        productName: this.product.productName,
        productOwnerName: this.product.productOwnerName,
        scrumMasterName: this.product.scrumMasterName,
        developers: this.developers,
        startDate: this.product.startDate ? new Date(this.product.startDate).toISOString() : undefined,
        methodology: this.product.methodology
      };

      this.productService.createProduct({ ...data } as ProductRequest).subscribe(
        (response: ProductResponse) => {
          console.log('Product created successfully:', response);
          form.reset();
          this.router.navigate(['/'])
        },
        (error) => {
          console.error('Error creating product:', error);
        }
      );
    }
  }
}
