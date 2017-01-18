import { Directive, ElementRef } from '@angular/core'

@Directive({ selector: 'h4' })
export class H4Directive {
  constructor (public elementRef: ElementRef) { }
}
