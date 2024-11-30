import { Component, Input, Output, EventEmitter } from '@angular/core';

import { zoo } from '../models/zoo';

@Component({
  selector: 'app-zoo-animal',
  imports: [],
  templateUrl: './zoo-animal.component.html',
  styleUrl: './zoo-animal.component.css'
})
export class ZooAnimalComponent {

  @Input()
  animal: zoo = new zoo;

  @Output() liked = new EventEmitter();

 likeAnimal(animal: any): void {
  this.liked.emit(animal.name);
 }
}
