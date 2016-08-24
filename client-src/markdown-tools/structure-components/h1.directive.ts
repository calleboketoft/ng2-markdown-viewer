import { Directive, ElementRef } from '@angular/core'

@Directive({ selector: 'h1' })
export class H1Directive {
  constructor (public elementRef: ElementRef) { }
}
