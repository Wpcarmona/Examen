import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ImageService {
  
  private URL = environment.PIXABAY_API_URL
  private KEY = environment.PIXABAY_API_KEY
  shareUrl = this.URL + this.KEY + '&q=';
  shareCategory = this.URL + this.KEY + 'category=';
  constructor(private http: HttpClient) { }


  share(search: string): Observable<any> {
    return this.http.get<any>(this.shareUrl + search)
  }

  category(category: string): Observable<any> {
    return this.http.get<any>(this.shareCategory + category)
  }
}