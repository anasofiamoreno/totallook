import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../auth';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  
public user!:User

  formLogin: FormGroup= this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.minLength(6)]]
  })

  constructor(  
    public activeModal: NgbActiveModal,
    private auth:Auth,
    private fb:FormBuilder,
    private authService:AuthService,
    private router:Router
 
    ) {} 
 closeModal(send:any){
 this.activeModal.close(send );
 }
  login(){
    const {email, password} = this.formLogin.value;
     this.authService.login(email,password)
     .then ( resp => {

          
            this.user = {
              email:resp.user.email!,
            }
            this.authService._user=this.user
            console.log(this.user)
            //localStorage.setItem('user',JSON.stringify(this.authService.user) );
            this.router.navigateByUrl('./categories')
          
          
        })
        .catch(error=>{
          Swal.fire({
            title: 'Error!',
            text: 'Credenciales invalidas',
            confirmButtonText: 'OK'
          })
        })

  // .then(resp=> {
  //   console.log(this.authService.user)
  //     this.router.navigateByUrl('./categories')
      
  //   }
      
    
    
  }
  ngOnInit(): void {
  }

}
