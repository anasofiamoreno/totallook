import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-templatecategori',
  templateUrl: './templatecategori.component.html',
  styleUrls: ['./templatecategori.component.css']
})
export class TemplatecategoriComponent implements OnInit {

  email: any = ''

  @Input() imglink: string = ''
  @Input() catlink: string = ''
  @Input() editlink: string =''
  @Input() catname: string = ''
  User: boolean= true

  constructor(private userstate: AuthService) { }

  ngOnInit(): void {
    this.email = this.userstate.user.email
  }

  

}
