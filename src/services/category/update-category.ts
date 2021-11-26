import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "src/environments/environment"
import { CategoryModel } from "src/models/category/category"

@Injectable({
    providedIn: 'root',
})
export class UpdateCategoryService {

    constructor(private http: HttpClient) { }

    deleteById(data: CategoryModel) {
        const token = localStorage.getItem("token")
        return this.http.put<void>(environment.url + 'category', data, {
            headers: {
                authorization: 'Bearer ' + token
            }
        })
    }

}