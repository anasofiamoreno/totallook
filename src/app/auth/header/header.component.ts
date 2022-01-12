import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalLoginComponent } from '../modal-login/modal-login.component';
import { AuthService } from '../service/auth.service';
import { onAuthStateChanged, getAuth} from 'firebase/auth';
import { Auth } from '@angular/fire/auth';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email: any  = ''
  user: any = ""

  constructor(
    private modalService: NgbModal,
    private auth: AuthService,
    private onAuth: Auth
      
   

  ) { }

  openModal () { 
    const modalRef = this.modalService.open (ModalLoginComponent, 
      { 
        scrollable: true,
        windowClass: 'myCustomModalClass', 
        keyboard: false,
        backdrop: 'static'
      });
      
    }

    logout(){
      this.auth.logout()
      
    }
  ngOnInit(): void {
    this.user = this.auth.user.email
  }

}
