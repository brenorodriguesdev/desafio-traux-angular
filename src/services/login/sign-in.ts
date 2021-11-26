import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SignInModel } from 'src/models/sign-in';

@Injectable({
  providedIn: 'root',
})
export class SignInService {

  constructor(private http: HttpClient) { }

  sign(data: SignInModel) {
    return this.http.post(environment.url + 'signIn', data)
  }

}