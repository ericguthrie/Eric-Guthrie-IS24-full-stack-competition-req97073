import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CreateProductComponent } from './createProduct/create.product.component';
import { UpdateProductComponent } from './updateProduct/update.product.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      //{ path: '', component: HomeComponent, pathMatch: 'full' },
      { path: '', component: ProductComponent },
      { path: 'create-product', component: CreateProductComponent },
      { path: 'update-product/:id', component: UpdateProductComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
