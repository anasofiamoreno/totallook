import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/interfaces/interfaces';
import { versionMajorMinor } from 'typescript';
import { Firestore } from '@angular/fire/firestore';
import { getDocs, doc, collection } from 'firebase/firestore';
<<<<<<< HEAD
=======
import { AuthService } from 'src/app/auth/service/auth.service';
>>>>>>> 8c96bde79009ac751cde721cb791a82ffdcc51fd

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


  data: Categorie[] = []

<<<<<<< HEAD

  constructor( private firestore: Firestore) { }

=======
  constructor( private firestore: Firestore, private userstate: AuthService) { }

>>>>>>> 8c96bde79009ac751cde721cb791a82ffdcc51fd
  async ngOnInit(): Promise<void> {

    
    (await getDocs(collection(this.firestore, "categories"))).forEach((doc) => {
      this.data.push({name: doc.id, imglink: doc.data()["imglink"] })
    });
<<<<<<< HEAD

   
=======
>>>>>>> 8c96bde79009ac751cde721cb791a82ffdcc51fd

  }

}
