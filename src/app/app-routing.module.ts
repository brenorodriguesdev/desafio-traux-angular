import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/guards/authentication';
import { IsAuthenticationGuard } from 'src/guards/isAuthentication';
import { CategoryPage } from 'src/pages/category.ts/category';
import { ProductPage } from 'src/pages/product/product';
import { SignInPage } from 'src/pages/signIn/sign-in';

const routes: Routes = [
  { path: '', component: SignInPage, canActivate: [IsAuthenticationGuard] },
  { path: 'category', component: CategoryPage, canActivate: [AuthenticationGuard] },
  { path: 'product', component: ProductPage, canActivate: [AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
