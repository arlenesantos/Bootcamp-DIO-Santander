import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private urlSheetBestAPI = 'https://sheet.best/api/sheets/d818e816-7f66-4fd7-acba-29eea717aa8e';


  httpOptions = {
    Headers: new HttpHeaders({ 'content-type': 'application-json' })
  }

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.urlSheetBestAPI);

  }
}
