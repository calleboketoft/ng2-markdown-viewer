import { Directive, ElementRef } from '@angular/core'

@Directive({ selector: 'h2' })
export class H2Directive {
  constructor (public elementRef: ElementRef) { }
}
