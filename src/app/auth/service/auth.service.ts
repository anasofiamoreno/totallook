import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword,signOut} from '@angular/fire/auth';
import { map } from 'rxjs';
import { User } from '../auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 public _user!:User

  get user(){
    return this._user
  }
  constructor(private auth:Auth) {
   this._user = JSON.parse(localStorage.getItem('user')!)|| {};
   }

  login(email:string, password:string){
   return  signInWithEmailAndPassword(this.auth, email, password)
  //  .then ( resp => {
  //     if(resp.user.email){
  //       this._user = {
  //         email:resp.user.email!,
  //       }
  //     }
  //   })
  }

  logout(){
    signOut(this.auth)
    localStorage.clear()
    console.log("logout?")
    location.reload()
  }
}
