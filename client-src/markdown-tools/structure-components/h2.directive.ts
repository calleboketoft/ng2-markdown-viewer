import { Directive, HostListener, ElementRef } from '@angular/core'

@Directive({ selector: 'h2' })
export class H2Directive {
  @HostListener('click') onClick () {
    console.log('this is a h2 directive')
  }

  constructor (public elementRef: ElementRef) { }
}