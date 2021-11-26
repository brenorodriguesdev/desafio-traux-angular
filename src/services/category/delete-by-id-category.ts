import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "src/environments/environment"
import { CategoryModel } from "src/models/category/category"

@Injectable({
    providedIn: 'root',
})
export class DeleteByIdCategoryService {

    constructor(private http: HttpClient) { }

    deleteById(id: number) {
        const token = localStorage.getItem("token")
        return this.http.delete<CategoryModel[]>(environment.url + 'category/' + id, {
            headers: {
                authorization: 'Bearer ' + token
            }
        })
    }

}