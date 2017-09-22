import {NgModule, Component,Pipe, OnInit} from '@angular/core';
import { ReactiveFormsModule, FormsModule, Validators, FormBuilder, NgForm, FormGroup, FormControl } from '@angular/forms';
// import {
//     ReactiveFormsModule,
//     FormsModule,
//     FormGroup,
//     FormControl,
//     Validators,
//     FormBuilder,
//     NgForm
// } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { DataserviceService } from "../services/dataservice.service";

//changes
// import { log_in } from "./login";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

//form group and controller to create variables for respective fields of form in controller
//  myform=new FormGroup({
//      email:new FormControl('',[Validators.required,Validators.minLength(5)]),
//      password: new FormControl('',[Validators.required,Validators.minLength(8)])

// });




    //form field validators by abhishek
    myform = new FormGroup({
        //email validator
        email: new FormControl('', [Validators.required, 
        Validators.pattern("[a-zA-Z]+[a-zA-Z0-9]*[^ @]*@[^ @]*[a-zA-Z]*[\.][a-zA-Z]+[a-zA-Z]+")
        ]),
        //password validator
        password: new FormControl('', [Validators.required, Validators.minLength(8), 
        Validators.pattern("^(?=.*[0-9])(?=.*[A-Z])(?=.*[@?#$%^&+*=!])(?=\\S+$).{4,}$")
        ])
    });



 constructor(public router: Router,private fb: FormBuilder, private service: DataserviceService) {}
//  logindata: any
 logindata:any

// get method
    // ngOnInit() { 
    //     return this.service.onLoggedin()
    //     .subscribe((logindata)=>{
    //         console.log(logindata);
    //         this.logindata=logindata;
    //     })
    // }

ngOnInit(){

}
// element:any[];
//post data using angular form
    // onLoggedin(myform: NgForm) {
    //     localStorage.setItem('isLoggedin', "true");
    //     this.logindata = myform.value;
    //      console.log(this.logindata);
    //       this.service.onLoggedin(this.logindata)
    //         .subscribe(
    //         newPost => {
    //             console.log(newPost);
    //             this.logindata = newPost;
    //         });
    // }

 onLoggedin(myform: NgForm) {
        localStorage.setItem('isLoggedin', "true");
      
         this.logindata = myform.value;
    //    var data="grant_type=password&username="+myform.value.Email+"&password="+myform.value.Password
         debugger;
           //  console.log(this.logindata);
        //  console.log(logindata);
          this.service.onLoggedin(this.logindata)
            .subscribe(
            newPost => {
                console.log(newPost);
                this.logindata = newPost;
            });
    }
















//sir ka code

//     onLoggedin(myform: NgForm) {
//         localStorage.setItem('isLoggedin', "true");
//         // var data="grant_type=password&username="+ this.logindata.username+"&password="+this.logindata.password
//     //    var abc= this.logindata
   
//         // this.logindata = myform.value;
//        var data="grant_type=password&username="+myform.value.Email+"&password="+myform.value.Password
//  debugger;
//         //  console.log(this.logindata);
//         //  console.log(logindata);
//           this.service.onLoggedin(data)
//             .subscribe(
//             newPost => {
//                 console.log(newPost);
//                 this.logindata = newPost;
//             });
//     }
    // onLoggedin(logintada: any):void { 
    //  localStorage.setItem('isLoggedin', "true");
       
    // }




//functions used to get values from form to properties in controller
get email(){
return this.myform.get("email");

}
get password(){
return this.myform.get("password");

}
}