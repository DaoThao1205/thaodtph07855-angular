import { Component, OnInit } from '@angular/core';
import { NewPostService } from '../new-post.service';

import { NewPost } from '../NewPost';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  selected: NewPost;
  newPosts: NewPost[];

  constructor(
    private newPostService: NewPostService
  ) { 
    console.log('constructor')
  }

  ngOnInit() {
    this.getNewPosts();
  }
  getNewPosts(){
   this.newPostService.getNewPosts().subscribe(data =>
     this.newPosts = data
    );
  }

}