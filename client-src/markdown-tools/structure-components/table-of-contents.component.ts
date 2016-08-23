import { Component, Input } from '@angular/core'

@Component({
  selector: 'table-of-contents',
  template: `
    <ul>
      <li *ngFor="let heading of pageElements">
        {{ heading.elementRef.nativeElement.innerHTML }}
      </li>
    </ul>
  `
})
export class TableOfContentsComponent {
  @Input() pageElements;
}