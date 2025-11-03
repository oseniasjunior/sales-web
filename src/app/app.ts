import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sale');

  protected customText = 'Olá mundo';

  protected changeCustomText() {
    this.customText = 'Texto alterado!';
  }

  protected onChangeTitle (){
    this.title.set('Sale alterado');
  }

}
