import { Component} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyOrganisationModalComponent } from 'src/app/component/shared/supportive_component/my-organisation-modal/my-organisation-modal.component';
@Component({
  selector: 'app-my-organisation',
  templateUrl: './my-organisation.component.html',
  styleUrls: ['./my-organisation.component.scss']
})
export class MyOrganisationComponent {


  items:any[]=[
    {
      category:"SuperAdmin",
      members:[
        {userProfilePic:'../../../../../assets/images/myOrganisation/Avatar.png',
        userName:'Madhav',
        login:'@mad',
        role:'Superdmin',
        read:'Yes',
        write:'Yes',
        execute:'Yes'}
      ]
    },
  {
    category:"Rate Cards",
    members:[
      {userProfilePic:'../../../../../assets/images/myOrganisation/Avatar.png',
      userName:'Ankur Chandra',
      login:'@gamer',
      role:'Admin',
      read:'Yes',
      write:'Yes',
      execute:'Yes'},
      {userProfilePic:'../../../../../assets/images/myOrganisation/Avatar.png',
      userName:'tulika ',
      login:'@tulip',
      role:'User',
      read:'Yes',
      write:'Yes',
      execute:'Yes'}
    ]
  },
  {
    category:"Alliance Approvals",
    members:[
      {userProfilePic:'../../../../../assets/images/myOrganisation/Avatar.png',
      userName:'Ashu',
      login:'@achoo',
      role:'Admin',
      read:'Yes',
      write:'Yes',
      execute:'Yes'}
    ]
  },
  {
    category:"Product Listing",
    members:[
      {userProfilePic:'../../../../../assets/images/myOrganisation/Avatar.png',
      userName:'Jahnavi',
      login:'@jahnv',
      role:'Admin',
      read:'Yes',
      write:'Yes',
      execute:'Yes'}
    ]
  }
  ]
 
  getSuperAdminMember() {
    const superAdminItem = this.items.find(obj => obj.category === 'SuperAdmin');
    if (superAdminItem && superAdminItem.members.length > 0) {
      return superAdminItem.members[0];
    }
    return null; // or any other default value you prefer
  }
  
  getUserMember() {
    const userItem = this.items.filter(obj => obj.category !== 'SuperAdmin');
    if (userItem.length) {
      // console.log(userItem)
      return userItem
    }
    return null; // or any other default value you prefer
  }
  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(MyOrganisationModalComponent);
  }


}
