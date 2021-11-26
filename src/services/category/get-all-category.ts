import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "src/environments/environment"
import { CategoryModel } from "src/models/category/category"

@Injectable({
    providedIn: 'root',
})
export class GetAllCategoryService {

    constructor(private http: HttpClient) { }

    get() {
        const token = localStorage.getItem("token")
        return this.http.get<CategoryModel[]>(environment.url + 'category', {
            headers: {
                authorization: 'Bearer ' + token
            }
        })
    }

}