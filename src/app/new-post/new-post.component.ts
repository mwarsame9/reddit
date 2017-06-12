import { Component, OnInit} from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostService]
})
export class NewPostComponent implements OnInit {
  posts: Post[];
  constructor(private router: Router, private postService: PostService){}

  ngOnInit() {
  }

  submitForm(authorName: string, title: string, content: string, category: string) {
   var newPost: Post = new Post(authorName, title, content, category);
   console.log(newPost);
   this.postService.addPost(newPost);
 }

}
