import { Component } from '@angular/core';


@Component({
  selector: 'app-context-side-bar',
  templateUrl: './context-side-bar.component.html',
  styleUrls: ['./context-side-bar.component.scss']
})
export class ContextSideBarComponent {

  isSearchVisible = false;

  items:any={
      selectedOption:'',
      options: ['mobius', 'MoScribe', 'suhaas']
    };

  contextList:any[]=[
    {contextName:'ARR >50',
     contextDescription:'lorem kfsnofaslksd dnkalnlknsad no nkjnndslk askoindsalkn',
     showContextDefinition:'select * from 94ds4ad4ad64a6d8a4' },
     {contextName:'ARR >500',
     contextDescription:'lorem knkjnndslk askoindsalkn',
     showContextDefinition:'select * from dasdas54ad64a6d8a4' },
     {contextName:'ARR <100',
     contextDescription:'lorem kfsnofaslksd  no nkjnndslk askoindsalkn',
     showContextDefinition:'select * from g15h3fh16fd4ad64a6d8a4' }
  ]

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
    
  }



}
