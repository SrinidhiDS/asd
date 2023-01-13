import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
//submit(login: any){
  //console.log("Form submitted",login)
//}
formdata: any;
Firstname: any;
Lastname: any;
emailid: any;

ngOnInit(){
  this.formdata = new FormGroup({
    Firstname: new FormControl("Srinidhi"),//this.firstnamevalidator),
    Lastname: new FormControl("S T"),
    emailid: new FormControl("srinidhi@gmail.com",Validators.compose([
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')])),
    password: new FormControl("Sri@123")})
}

onclicksubmit(data:any): void{
    this.Firstname = data.Firstname;
    this.Lastname = data.Lastname;
    this.emailid = data.emailid;
    console.log("Form Submited")
  }
// CUSTOM VALIDATION //
//firstnamevalidator(formcontrol:any){
 //   if (formcontrol.value.length < 2){
   // return{"Firstname":true}
//}
//}
}

