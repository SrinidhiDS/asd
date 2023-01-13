import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-terracottajewellery',
  templateUrl: './terracottajewellery.component.html',
  styleUrls: ['./terracottajewellery.component.scss']
})
export class TerracottajewelleryComponent {
outputmessage = "ooho! you got a coupon for jewellery"
@Output() messagejewellery = new EventEmitter<any>();
constructor(){}
  onClick(){
  this.messagejewellery.emit(this.outputmessage);
}
name ="TERRACOTTA"
}
