import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Terracotta World';
  ques = " Want to explore the products?"
  public name = 'planters';
  public image = '/assets/pot_image _3.jpg';
  public value = ""
childmsg = " "
recievemsg($event: any){
  this.childmsg = $event;
}

}
