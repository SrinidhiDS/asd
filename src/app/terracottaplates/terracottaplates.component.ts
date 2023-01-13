import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-terracottaplates',
  templateUrl: './terracottaplates.component.html',
  styleUrls: ['./terracottaplates.component.scss']
})
export class TerracottaplatesComponent {
outputmessage = "ooho! you got a coupon for plates"
@Output() messageplates = new EventEmitter<string>();
onClick(){
  this.messageplates.emit(this.outputmessage);
}
name ="TERRACOTTA"
}


