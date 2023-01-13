import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-terracottapots',
  templateUrl: './terracottapots.component.html',
  styleUrls: ['./terracottapots.component.scss']
})
export class TerracottapotsComponent {
outputmessage = "ohoo! you got a coupon for planters"
name = "TERRACOTTA"
@Output() messageplanter = new EventEmitter<string>();
constructor() {}
onClick(){
  this.messageplanter.emit(this.outputmessage);
}
}
