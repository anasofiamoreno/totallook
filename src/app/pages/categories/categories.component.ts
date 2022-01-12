import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { deleteDoc } from '@firebase/firestore';
import { Categorie } from 'src/app/interfaces/interfaces';
import { versionMajorMinor } from 'typescript';
import { getDocs, collection, doc} from 'firebase/firestore';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  email: any = ''
  data: Categorie[] = []

  constructor( private firestore: Firestore, private userstate: AuthService, private router: Router) { }


async deleteCategory(){
  await deleteDoc(doc(this.firestore, "categories", ));
}


  async ngOnInit(): Promise<void> {

    
    
    (await getDocs(collection(this.firestore, "categories"))).forEach((doc) => {
      this.data.push({name: doc.id, imglink: doc.data()["imglink"] })
    })

    this.email = this.userstate.user.email

  }

  addCategories(){
    this.router.navigateByUrl('/editcategory')
  }

}
