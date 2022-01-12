import { Component, OnInit } from '@angular/core';
import { doc, Firestore } from '@angular/fire/firestore';
import { deleteDoc } from '@firebase/firestore';
import { Categorie } from 'src/app/interfaces/interfaces';
import { versionMajorMinor } from 'typescript';
import { Firestore } from '@angular/fire/firestore';
import { getDocs, doc, collection } from 'firebase/firestore';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


  data: Categorie[] = []

  constructor( private firestore: Firestore, private userstate: AuthService) { }


  constructor(private bd:Firestore) { 
  
  }
async deleteCategory(){
  await deleteDoc(doc(this.bd, "categories", ));
}
  ngOnInit(): void {

  async ngOnInit(): Promise<void> {

    
    (await getDocs(collection(this.firestore, "categories"))).forEach((doc) => {
      this.data.push({name: doc.id, imglink: doc.data()["imglink"] })
    });


  }

}
