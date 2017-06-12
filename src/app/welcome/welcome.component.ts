import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers:[PostService]
})

export class WelcomeComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;

  constructor(private postService: PostService) { }

  ngOnInit(){
  this.posts = this.postService.getPosts();
  }

  goToDetailPage(clickedPost: Post){

  };
}
