import { Component, OnInit } from '@angular/core';
import { Firestore, setDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { doc } from '@firebase/firestore';




@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {

  formCategory: FormGroup= this.fb.group({
    nameCategory:['',[Validators.required,Validators.minLength(4)]],
    imgCategory: ['',[Validators.required]],
    description: ['',[Validators.required,Validators.minLength(4)]]
  })

  constructor(private bd:Firestore, private fb:FormBuilder ) { }
  async saveCategory(){
    const {nameCategory, imgCategory, description} = this.formCategory.value
   await setDoc(doc(this.bd, "categories", nameCategory), {
    imglink: imgCategory,
    description: description
   
  });
  }
  ngOnInit(): void {
  }

  

}
