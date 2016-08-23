import { Directive, HostListener, ElementRef } from '@angular/core'

@Directive({ selector: 'h3' })
export class H3Directive {
  @HostListener('click') onClick () {
    console.log('this is a h3 directive')
  }

  constructor (public elementRef: ElementRef) { }
}