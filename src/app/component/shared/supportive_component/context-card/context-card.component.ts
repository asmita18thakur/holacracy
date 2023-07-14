import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-context-card',
  templateUrl: './context-card.component.html',
  styleUrls: ['./context-card.component.scss']
})
export class ContextCardComponent {
  isDescriptionExpanded = false;
  isDefinitionExpanded = false;

  @Input() item:any;

  toggleExpandDescription() {
    this.isDescriptionExpanded = !this.isDescriptionExpanded;
  }
  toggleExpandDefinition() {
    this.isDefinitionExpanded = !this.isDefinitionExpanded;
  }
}
