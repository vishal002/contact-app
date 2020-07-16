import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  header: any;
  token: any;

  constructor(private http: HttpClient, private router: Router) {
    // this.token = '00D2w000007Pys6!AQ4AQBtQrx7jfq7v_3FzkfV5FALPWLDlVYsDZQWjD50FkB_SLkyAeic1J9g6q_3GirIe64xCTQf798V5ouzjBNehGTN87UVf';
    if (this.router.url) {
      this.token = this.router.url.split('=')[1].split('&')[0];
    } else {
      this.token = '';
    }
    this.header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
         Authorization: 'Bearer ' + this.token
      })
    };
  }
  createContact(requestBody) {
    return this.http.post(`${environment.servers.play}Contact/`, requestBody, this.header);
  }
  fetchContactList() {
    return this.http.get(`${environment.servers.play}Contact/`, this.header);
  }
}
