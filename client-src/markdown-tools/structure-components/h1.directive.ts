import { Directive, HostListener, ElementRef } from '@angular/core'

@Directive({ selector: 'h1' })
export class H1Directive {
  @HostListener('click') onClick () {
    console.log('this is a h1 directive')
  }

  constructor (public elementRef: ElementRef) { }
}