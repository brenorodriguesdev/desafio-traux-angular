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
    let formData = new FormData()
    formData.append('id', data.id.toString())
    formData.append('name', data.name)
    formData.append('idCategory', data.idCategory.toString())
    formData.append('image', data.image)

    return this.http.put<void>(environment.url + 'product', formData, {
      headers: {
        authorization: 'Bearer ' + token
      }
    })
  }

}