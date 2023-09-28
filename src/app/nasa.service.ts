import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  public apiKey: string = '1pwwjhe5idhom9J72dGthmyhX7hNTbwZ9DH0cUJT';
  public apiUrl: string = `https://api.nasa.gov/planetary/apod`;

  constructor(public http: HttpClient) {}

  getImageOfTheDay(): Observable<any> {
    const url: any = `${this.apiUrl}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
