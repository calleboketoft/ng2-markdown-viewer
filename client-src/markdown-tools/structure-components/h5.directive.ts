import { Directive, HostListener } from '@angular/core'

@Directive({ selector: 'h5' })
export class H5Directive {
  @HostListener('click') onClick () {
    console.log('this is a h5 directive')
  }
}