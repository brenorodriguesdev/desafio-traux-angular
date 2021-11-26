import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInPage } from 'src/pages/signIn/sign-in';
import { SignUpDialog } from 'src/components/signUpDialog/sign-up-dialog';
import { ProductPage } from 'src/pages/product/product';
import { MatIconModule } from '@angular/material/icon';
import { CreateProductDialog } from 'src/components/createProductDialog/create-product-dialog';
import { UpdateProductDialog } from 'src/components/updateProductDialog/update-product-dialog';

@NgModule({
  declarations: [
    AppComponent,
    SignInPage,
    ProductPage,
    SignUpDialog,
    CreateProductDialog,
    UpdateProductDialog
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
