import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent{

  constructor(private router: Router){}

  posts: Post[] = [
    new Post("Mohamed","Watched the movie passengers?","movies","Whatever", 1),
    new Post("Sowmya", "Why do I like to listen to emotional songs?", "music","I love to listen to emotional songs when am down...", 2),
    new Post("Divya", "How easy is to get an apartment in downtown Portland?", "realestate","something something" ,3)
  ];

  goToDetailPage(clickedPost: Post){
    this.router.navigate(['posts', clickedPost.id]);
  };
}
