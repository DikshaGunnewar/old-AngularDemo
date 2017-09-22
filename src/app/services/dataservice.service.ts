import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataserviceService {

 constructor(private http:Http) { }

// url="http://localhost:63174/api/UserDetails";

// //to get data
// getPosts() {
//     return this.http.get(this.url)
//       .map(res => res.json());
//   }


//get method for socail Media Data details
getSocialMediaData() { 
   var headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.get("http://localhost:12952/api/Users/GetData",{headers:headers})
      .map(res => res.json());
   }

//search User
// searchUser() { 
//    var headers = new Headers();
//    headers.append('Content-Type', 'application/json');
//     return this.http.get("http://localhost:12952/api/Twitter/SearchUser",{headers:headers})
//       .map(res => res.json());
//   }



// Register User by diksha
onRegister(resource):Observable<string>{
   var headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:12952/api/Account/Register",JSON.stringify(resource),{ headers: headers })
       .map(response=>response.json());  
  }

//subscription
subscription(resource):Observable<string>{
   var headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:12952/api/Admin/AddPlan",JSON.stringify(resource),{ headers: headers })
       .map(response=>response.json());  
  }

//login not working
onLoggedin(resource):Observable<string>{
   var headers = new Headers();
   headers.append('Content-Type', 'application/json');
   debugger;
    return this.http.post("http://localhost:12952/token",JSON.stringify(resource),{ headers: headers })
       .map(response=>response.json());  
  }





// working code for twitter for main Achitecture by diksha
 makeTwittercall(){
   var headers = new Headers();
   headers.append('Content-Type', 'application/X-www-form-urlencoded');
       return this.http.get('http://localhost:12952/api/Twitter',{headers:headers})
       .map(res => res.json());
}


 makeInstagramcall(){
   var headers = new Headers();
   headers.append('Content-Type', 'application/X-www-form-urlencoded');
       return this.http.get('http://localhost:12952/api/Instagram',{headers:headers})
      .map(res => res.json());
}



}
