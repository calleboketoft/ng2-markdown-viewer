import { Directive, ElementRef } from '@angular/core'

@Directive({ selector: 'h3' })
export class H3Directive {
  constructor (public elementRef: ElementRef) { }
}
