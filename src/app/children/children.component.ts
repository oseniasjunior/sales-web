import {Component, EventEmitter, input, Input, output, Output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-children',
  imports: [
    FormsModule
  ],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss',
})
export class ChildrenComponent {

  // @Input() mensagem: string = '';
  mensagem = input('');

  novaMensagem = signal('');

  // @Output() emitirMensagem = new EventEmitter<string>();
  emitirMensagem = output<string>();

  alterarMensagem() {
    this.emitirMensagem.emit(this.novaMensagem());
  }

}
