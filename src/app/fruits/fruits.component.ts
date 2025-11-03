import {Component, OnInit, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-fruits',
  imports: [FormsModule],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss',
})
export class FruitsComponent implements OnInit {

  fruitName = signal('');
  protected fruits = signal<string[]>([]);

  imageUrl = signal('https://angular.io/assets/images/logos/angular/angular.png');

  ngOnInit() {
    this.getFruits();
  }

  protected addFruit() {
    this.fruits.update(fruits => [...fruits, this.fruitName()]);
    localStorage.setItem('fruits', JSON.stringify(this.fruits()));
    this.fruitName.set('');
  }

  private getFruits() {
    const fruits = localStorage.getItem('fruits');
    if (fruits) {
      this.fruits.set(JSON.parse(fruits));
    }
  }

}
