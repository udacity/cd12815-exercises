import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostsComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'post-reader';
}
