import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalLoginComponent } from '../modal-login/modal-login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private modalService: NgbModal

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
  ngOnInit(): void {
  }

}
