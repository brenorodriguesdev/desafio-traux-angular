import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SignInModel } from 'src/models/login/sign-in';

@Injectable({
  providedIn: 'root',
})
export class SignInService {

  constructor(private http: HttpClient) { }

  sign(data: SignInModel) {
    return this.http.post<string>(environment.url + 'signIn', data)
  }

}