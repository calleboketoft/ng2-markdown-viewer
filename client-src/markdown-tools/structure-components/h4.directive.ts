import { Directive, HostListener, ElementRef } from '@angular/core'

@Directive({ selector: 'h4' })
export class H4Directive {
  @HostListener('click') onClick () {
    console.log('this is a h4 directive')
  }

  constructor (public elementRef: ElementRef) { }
}