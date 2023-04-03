import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { ConfirmationDialogComponent, PromptDialogComponent, ValidationErrorComponent } from './components';

@NgModule({
  //declarations: [
  //  ConfirmationDialogComponent,
  //  PromptDialogComponent,
  //  ValidationErrorComponent,
  //],
  //exports: [
  //  ConfirmationDialogComponent,
  //  PromptDialogComponent,
  //  ValidationErrorComponent,
  //],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class AppSharedModule { }
