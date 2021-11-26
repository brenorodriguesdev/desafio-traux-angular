import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UpdateProductModel } from 'src/models/product/update-product';
import { ProductModel } from 'src/models/product/product';

@Injectable({
  providedIn: 'root',
})
export class GetAllProductService {

  constructor(private http: HttpClient) { }

  get() {
    const token = localStorage.getItem("token")
    return this.http.get<ProductModel[]>(environment.url + 'product', {
      headers: {
        authorization: 'Bearer ' + token
      }
    })
  }

}