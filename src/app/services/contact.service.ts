// contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environment';

export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
  company_name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/message`;

  constructor(private http: HttpClient) {}

  sendMessage(contactData: ContactRequest): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(this.apiUrl, contactData).pipe(
      catchError((error) => {
        console.error('Send message failed:', error);
        return throwError(() => error);
      })
    );
  }
}
