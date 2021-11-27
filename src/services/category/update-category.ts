import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "src/environments/environment"
import { UpdateCategoryModel } from "src/models/category/update-category"

@Injectable({
    providedIn: 'root',
})
export class UpdateCategoryService {

    constructor(private http: HttpClient) { }

    update(data: UpdateCategoryModel) {
        const token = localStorage.getItem("token")
        let formData = new FormData()
        formData.append('id', data.id.toString())
        formData.append('name', data.name)
        formData.append('image', data.image)
        console.log(data.image)

        return this.http.put<void>(environment.url + 'category', formData, {
            headers: {
                authorization: 'Bearer ' + token
            }
        })
    }

}