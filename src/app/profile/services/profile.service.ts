import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const token: string = localStorage.getItem('token') || '';
const authorization = { 'x-auth-token': token };
const httpHeaders = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
    'x-auth-token': token,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}
  // header spec: content-type : application/json

  // add the token in authorization.

  getProfile() {
    // const headers = new HttpHeaders()
    //   .set('Content-Type', 'application/json')
    //   .set('Authorization', localStorage.getItem('token') || '');
    return this.httpClient.get('/api/profile/me', httpHeaders);
  }
  createProfile(profile: any) {
    return this.httpClient.post('/api/profile', profile, httpHeaders);
  }
}
