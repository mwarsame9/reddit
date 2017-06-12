import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';
@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent  {
  @Output() newPostSender = new EventEmitter;

   newPost(
   authorName: string,
   title: string,
   content: string,
   category: string,
   id: number
   ){
    var newPost = new Post(authorName, title, content, category,id);
    this.newPostSender.emit(newPost);
   }


}
