import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
@Input() parentmessage ='';
name = "TERRACOTTA";
promsg = " ";
rmessage($event : any){
  this.promsg = $event
}

outputmsg = ["--> TERRACOTTA PLANTERS",
             "--> TERRACOTTA PLATES",
            "--> TERRACOTTA JEWELLERY"]
@Output() productmessage = new EventEmitter<any>()
   Onclick(){
    this.productmessage.emit(this.outputmsg);
   }
}
