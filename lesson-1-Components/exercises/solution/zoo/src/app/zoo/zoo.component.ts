import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { zoo } from '../models/zoo';
import { ZooAnimalComponent } from "../zoo-animal/zoo-animal.component";

@Component({
  selector: 'app-zoo',
  imports: [CommonModule, ZooAnimalComponent],
  templateUrl: './zoo.component.html',
  styleUrl: './zoo.component.css'
})
export class ZooComponent {

  animalList: zoo[] = [];

  
  ngOnInit(): void {
    this.animalList = [
      {
        id: 1,
        name: 'Panda',
        fed: true
      },
      {
        id: 2,
        name: 'Elephant',
        fed: true
      },
      {
        id: 3,
        name: 'Lion',
        fed: false
      }
]
}

onLike(animal: any): void {
  window.alert('I like the '+ animal);
}

}