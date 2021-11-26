import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SignUpModel } from 'src/models/sign-up';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  sign(data: SignUpModel) {
    return this.http.post(environment.url + 'signUp', data)
  }

}