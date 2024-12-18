import { Component } from '@angular/core';
import { Post } from '../models/Post';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from "../post-item/post-item.component";

@Component({
  selector: 'app-posts',
  imports: [CommonModule, PostItemComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  title: string = "Posts";
  posts: Post[] = [];
  

  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: "My first post",
        body: "Just testing this out!",
        votes: 1
      },
      {
        id: 2,
        title: "What's your favorite front-end framework?",
        body: "My favorite is Angular. What do you enjoy working with?",
        votes: 1
      },
      {
        id: 3,
        title: "ngOnInit is great",
        body: "This lifecycle method gets called automatically upon component initialization!",
        votes: 1
      },
    ];
  }

  hidePost(post: Post) : void {
    this.posts=this.posts.filter(p => p.id !=  post.id);
  }
}
