import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreateProductModel } from 'src/models/product/create-product';
import { ProductModel } from 'src/models/product/product';

@Injectable({
  providedIn: 'root',
})
export class CreateProductService {

  constructor(private http: HttpClient) { }

  create(data: CreateProductModel) {
    const token = localStorage.getItem("token")
    return this.http.post<ProductModel>(environment.url + 'product', data, {
      headers: {
        authorization: 'Bearer ' + token
      }
    })
  }

}