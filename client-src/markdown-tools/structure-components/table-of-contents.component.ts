import { Component, Input } from '@angular/core'

@Component({
  selector: 'table-of-contents',
  template: `
    ToC placeholder
  `
})
export class TableOfContentsComponent {
  @Input() set pageElements (value) {
    console.log(value)
  };
}