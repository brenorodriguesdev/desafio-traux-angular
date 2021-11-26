import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SignInModel } from 'src/models/login/sign-in';
import { CategoryModel } from 'src/models/category/category';
import { CreateCategoryModel } from 'src/models/category/create-category';

@Injectable({
    providedIn: 'root',
})
export class CreateCategoryService {

    constructor(private http: HttpClient) { }

    create(data: CreateCategoryModel) {
        const token = localStorage.getItem("token")
        return this.http.post<CategoryModel>(environment.url + 'category', data, {
            headers: {
                authorization: 'Bearer ' + token
            }
        })
    }

}