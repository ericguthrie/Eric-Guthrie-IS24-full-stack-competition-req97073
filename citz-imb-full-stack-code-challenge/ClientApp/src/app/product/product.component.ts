import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DeleteProductService } from '../services/service-delete-product.service';
import { Router } from '@angular/router';

interface Developer {
  name: string;
}

interface Product {
  productId: number;
  productName: string;
  productOwnerName: string;
  scrumMaster: { name: string };
  productDevelopers: { developer: Developer }[];
  startDate: Date;
  methodology: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient, private deleteProduct: DeleteProductService, private router: Router) { }

  ngOnInit() {
    this.http.get<Product[]>('/api/Products').subscribe(
      (data: Product[]) => {
        console.log(data)
        this.products = data;
        this.filteredProducts = data;
        this.search();
        for (const product of data) {
          console.log(product.productDevelopers.map((dev: any) => dev.developer.name));
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //associated developers and scrummaster search filer
search() {
    console.log('searchterm', this.searchTerm)
    if (this.searchTerm === '') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => {
        const isProductDeveloperMatched = product.productDevelopers.some(developer => developer.developer.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
        const isScrumMasterMatched = product.scrumMaster.name.toLowerCase().includes(this.searchTerm.toLowerCase());
        return isProductDeveloperMatched || isScrumMasterMatched;
      });
    }
}


  delete(productId: number) {
    const confirmed = confirm('Are you sure you want to delete a product?');
    if (confirmed) {
      this.deleteProduct.deleteProductById(productId).subscribe(
        () => {
          console.log('Product deleted successfully');
          // remove the product from the products array
          this.products = this.products.filter(product => product.productId !== productId);
          this.filteredProducts = this.filteredProducts.filter(product => product.productId !== productId);
        },
        error => {
          console.log('An error occurred:', error);
          // display an error message to the user
          alert('Unable to delete product.');
        }
      );
    } else {
      console.log('Action cancelled.');
      // or redirect to another page, clear form fields, or perform any other necessary tasks to cancel the action
      this.router.navigate(['/product'])
    }
  }

}
