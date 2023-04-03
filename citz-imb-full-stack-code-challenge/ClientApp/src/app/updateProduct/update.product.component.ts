import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UpdateProductService } from '../services/service-update-product.service';
import { ProductRequest, ProductResponse } from '../shared/swagger-proxy';


@Component({
  selector: 'app-update-product',
  templateUrl: './update.product.component.html',
  styleUrls: ['./update.product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  productId!: number;
  product: ProductRequest = new ProductRequest();
  developers: string[] = [];
  developerName = '';
  errorMessage = ''; 

  constructor(private route: ActivatedRoute, private productService: UpdateProductService, private router: Router) { }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.getProduct(this.productId);
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe(
      (response: ProductResponse) => {
        this.product.productName = response.productName;
        this.product.productOwnerName = response.productOwnerName;
        this.product.scrumMasterName = response.scrumMasterName;
        this.product.methodology = response.methodology;
        this.developers = response.developers || [];
      },
      (error) => {
        console.error('Error getting product:', error);
      }
    );
  }


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

  onSubmit(form: NgForm): void {
    console.log("Valid?")
    if (form.valid) {
      console.log("Valid?")
      const data = {
          productName: this.product.productName,
          productOwnerName: this.product.productOwnerName,
          scrumMasterName: this.product.scrumMasterName,
          developers: this.developers || [],
          startDate: this.product.startDate,
          methodology: this.product.methodology,
      };

      this.productService.updateProduct(this.productId, data as ProductRequest).subscribe(
        (response: ProductResponse) => {
          console.log('Product updated successfully:', response);
          form.reset();
          this.router.navigate(['/'])
        }
      );
    }
  }
}
