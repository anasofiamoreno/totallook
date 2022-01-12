import { Component, OnInit } from '@angular/core';
import { Firestore, getDocs, doc, collection } from '@angular/fire/firestore';
import { Categorie } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-shortcat',
  templateUrl: './shortcat.component.html',
  styleUrls: ['./shortcat.component.css']
})
export class ShortcatComponent implements OnInit {

  data: Categorie[] = []
  email: string = ''

  constructor(private fiestore: Firestore) { }

  async ngOnInit(): Promise<void> {

    (await getDocs(collection(this.fiestore, "categories"))).forEach((doc) => {
      this.data.push({name: doc.id, imglink: doc.data()["imglink"] })
    })

    //this.email = this.userstate.user.email

  }

}
