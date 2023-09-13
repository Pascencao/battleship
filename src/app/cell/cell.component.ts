import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input('gameId') id?: string = '';
  @Output() sink: EventEmitter<any> = new EventEmitter();
  isTouched = false;

  setSink(){
    console.log('hello')
    if(!this.isTouched){
      this.isTouched = true;
      this.sink.emit(this.id);
    }
  }
}
