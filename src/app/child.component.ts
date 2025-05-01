import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `.btn { padding: 5px; }`,
  template: `
    <button class="btn btn-primary" (click)="addItem()">Add Item</button>
  `,
  standalone: true,
})
export class ChildComponent {
  addItem() {}
}
