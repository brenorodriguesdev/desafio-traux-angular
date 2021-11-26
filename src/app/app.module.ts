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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CategoryPage } from 'src/pages/category.ts/category';
import { CreateCategoryDialog } from 'src/components/createCategoryDialog/create-category-dialog';
import { UpdateCategoryDialog } from 'src/components/updateCategoryDialog/update-category-dialog';
import { HttpClientModule } from '@angular/common/http';
import { SignInService } from 'src/services/login/sign-in';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthenticationGuard } from 'src/guards/authentication';
import { IsAuthenticationGuard } from 'src/guards/isAuthentication';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from 'src/components/ navbar/navbar';

@NgModule({
  declarations: [
    AppComponent,
    SignInPage,
    ProductPage,
    CategoryPage,
    SignUpDialog,
    CreateProductDialog,
    UpdateProductDialog,
    CreateCategoryDialog,
    UpdateCategoryDialog,
    NavbarComponent
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
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule
  ],
  providers: [SignInService, AuthenticationGuard, IsAuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
