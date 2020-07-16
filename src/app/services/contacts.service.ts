import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  header: any;

  constructor(private http: HttpClient) {
    this.header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 00D2w000007Pys6!AQ4AQBtQrx7jfq7v_3FzkfV5FALPWLDlVYsDZQWjD50FkB_SLkyAeic1J9g6q_3GirIe64xCTQf798V5ouzjBNehGTN87UVf'
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
