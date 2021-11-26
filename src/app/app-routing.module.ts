import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/guards/authentication';
import { CategoryPage } from 'src/pages/category.ts/category';
import { ProductPage } from 'src/pages/product/product';
import { SignInPage } from 'src/pages/signIn/sign-in';

const routes: Routes = [
  { path: '', component: SignInPage },
  { path: 'category', component: CategoryPage, canActivate: [AuthenticationGuard] },
  { path: 'product', component: ProductPage, canActivate: [AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
