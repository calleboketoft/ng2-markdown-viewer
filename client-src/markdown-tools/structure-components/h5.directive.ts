import { Directive, ElementRef } from '@angular/core'

@Directive({ selector: 'h5' })
export class H5Directive {
  constructor (public elementRef: ElementRef) { }
}