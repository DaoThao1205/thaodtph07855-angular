import { Injectable } from '@angular/core';
import { data } from './MockData';
import { NewPost } from './NewPost';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NewPostService {
  api = 'https://jsonplaceholder.typicode.com/posts';
  products = data;
  constructor(
    private http: HttpClient
  ) { }

  getNewPosts(): Observable<NewPost[]>{
    return this.http.get<NewPost[]>(this.api);
  }
}