import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CategoryModel } from 'src/models/category/category';
import { CreateCategoryModel } from 'src/models/category/create-category';

@Injectable({
    providedIn: 'root',
})
export class CreateCategoryService {

    constructor(private http: HttpClient) { }

    create(data: CreateCategoryModel) {
        const token = localStorage.getItem("token")
        let formData = new FormData()
        formData.append('name', data.name)
        formData.append('image', data.image)

        return this.http.post<CategoryModel>(environment.url + 'category', formData, {
            headers: {
                authorization: 'Bearer ' + token
            }
        })
    }

}