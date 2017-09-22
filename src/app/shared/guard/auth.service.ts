import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class AuthService{
    constructor(private http:Http){

    }

 login(credential){
   return this.http.post('/api/authenticate',
     JSON.stringify(credential));    
  }

  logout(){

  }

  isLoggedIn(){
      return false;
  }
}