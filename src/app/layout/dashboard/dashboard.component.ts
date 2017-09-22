import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from "@angular/router";
import { DataserviceService } from "../../services/dataservice.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule, Validators, FormBuilder, NgForm, FormGroup, FormControl } from '@angular/forms';

// import {ANGULAR_TABS_DIRECTIVES, TabInterface} from "angular2-tabs/core";
 


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})


export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor(private modalService: NgbModal, private router:Router, private service:DataserviceService) {
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });

        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        }, {
            id: 2,
            type: 'warning',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        });
    }
// ngOnInit(){

// }

//get twitter data  by diksha
posts:any[];
    ngOnInit() {
        return this.service.getSocialMediaData().subscribe((posts) => {
            console.log(posts);
            this.posts = posts;
        });
    }

// search:any[]
//     searchUser(){
//         return this.service.searchUser().subscribe((search)=>{
//             console.log(search);
//             this.search=search;
//         })
//     }


//method to close alert messages
    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

//to navigate button to next module by diksha
     btnClick(){
       this.router.navigate(['./settings']);
     }

    closeResult: string;
 open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
    
    myform=new FormGroup({
        Title:new FormControl('', [Validators.required, 
        Validators.pattern("[A-Za-z]+")
        ]),

        Price:new FormControl('', [Validators.required
        ]),

        NOA:new FormControl('', [Validators.required
        ])

    })


subscription(subscriptionplan: any):void{
this.router.navigateByUrl("/dashboard.component.html");
console.log(subscriptionplan);

}


    get Title(){
return this.myform.get("email");
}

get Price(){
return this.myform.get("Price");
}

get NOA(){
return this.myform.get("NOA");
}


    //////////////////////////////////////////////////////////////////////
    // dataservice code for getting datafrom webApi can be added on any page


    // posts:any[];
    // constructor(private service:DataserviceService)
    // {
    // }

// ngOnInit(){
//     //GET from api Employee
//     return this.service.getPosts().subscribe((posts) => {
//       console.log(posts);
//       this.posts = posts;
//     });    
 
// }


//twitter call
// makecall(){
//     this.service.makecall()
//     .subscribe(posts=>{
//        console.log(posts);
//        this.posts = posts;
//     });
// }
  
//working code
// createPost(input:HTMLInputElement)
// {
//     let post={name:input.value};
//     this.posts.splice(0,0,post);
//     input.value="";
   
//     //service method called
// return this.service.create(post)
//     .subscribe(
//         newPost=>{
//             post['id']=newPost.id;           
//             // this.posts.splice(0,0,post);  //permistic approach i.e late updadting list
//           });        
//  }

// //not working
//  updatePost(post){
//    this.service.update(post)
//      .subscribe(
//          updatedPost =>{
//           console.log(updatedPost);
//      });  
// }

    // tabOne: TabInterface = {id: "test", title: 'test Title', canActivate: () => {return true;}}



}
