import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UpdateProductModel } from 'src/models/product/update-product';

@Injectable({
  providedIn: 'root',
})
export class UpdateProductService {

  constructor(private http: HttpClient) { }

  update(data: UpdateProductModel) {
    const token = localStorage.getItem("token")
    return this.http.put<void>(environment.url + 'product', data, {
      headers: {
        authorization: 'Bearer ' + token
      }
    })
  }

}