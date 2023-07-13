import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-my-organisation-modal',
  templateUrl: './my-organisation-modal.component.html',
  styleUrls: ['./my-organisation-modal.component.scss']
})
export class MyOrganisationModalComponent {
  constructor(public modal: NgbActiveModal,private clipboard: Clipboard) {}
  
  myOrganisationInvite={
    tool:'',
    role:'',
    email:'',
    access:{
      read:'',
      write:'',
      execute:''
    },
    inviteLink:'www.google.com/user'
  }
 
  closeModal() {
    this.modal.dismiss();
  }

  api(){

  }
  copyLink() {
    this.clipboard.copy(this.myOrganisationInvite.inviteLink);
   
    // const inputElement = document.getElementById('inviteUrl') as HTMLInputElement;
    // inputElement.select();
    // document.execCommand('copy');
  }
  // submitAnswer(): void {
  //   console.log(this.myOrganisationInvite); // Log the selected answer value
  // }

 
}
