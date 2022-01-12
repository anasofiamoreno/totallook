import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  
  constructor(  
    public activeModal: NgbActiveModal,
  
 
    ) {} 
 closeModal(send:any){
 this.activeModal.close(send );
 }
  
  ngOnInit(): void {
  }

}
