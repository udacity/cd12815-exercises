import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZooComponent } from './zoo/zoo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ZooComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "zoo";
}
