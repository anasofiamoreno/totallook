import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {

  constructor( private auth: Auth) { }

  ngOnInit(): void {
  }

  login(){
    signInWithEmailAndPassword(this.auth, "admin@admin.com", "12345678")
    .then( res => console.log(res))
  }

}
