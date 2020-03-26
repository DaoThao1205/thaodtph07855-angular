import { Injectable } from '@angular/core';
import { data } from './MockData';
import { NewPost } from './NewPost';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NewPostService {
  api = 'https://5e7bf752a917d70016682c8c.mockapi.io/api/news';
  products = data;
  constructor(
    private http: HttpClient
  ) { }

  getNewPosts(): Observable<NewPost[]>{
    return this.http.get<NewPost[]>(this.api);
  }
}