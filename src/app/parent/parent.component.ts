import {Component, signal} from '@angular/core';
import {ChildrenComponent} from '../children/children.component';

@Component({
  selector: 'app-parent',
  imports: [ChildrenComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
    // mensagem: string = 'Olá mundo!';
  mensagem = signal('Olá mundo');

  ouvirMensagem(mensagem: string){
    console.log(mensagem);
    this.mensagem.set(mensagem);
  }

}
