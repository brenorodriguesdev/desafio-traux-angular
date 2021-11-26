import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeleteByIdProductService {

  constructor(private http: HttpClient) { }

  delete(id: number) {
    const token = localStorage.getItem("token")
    return this.http.delete<void>(environment.url + 'product/' + id, {
      headers: {
        authorization: 'Bearer ' + token
      }
    })
  }

}