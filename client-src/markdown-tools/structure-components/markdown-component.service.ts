import { Component, ViewChildren } from '@angular/core'
import { H1Directive } from './h1.directive'
import { H2Directive } from './h2.directive'

export class MarkdownComponentService {

  public buildComponent ({template, styles}) {
    @Component({
      selector: 'dynamic-component-spawn',
      template: template + `
        <button (click)="getHeadings()">
          Get Headings
        </button>
      `,
      styles,
      directives: [
        H1Directive,
        H2Directive
      ]
    })
    class DynamicComponent {
      @ViewChildren(H1Directive) public h1Directives;
      @ViewChildren(H2Directive) public h2Directives;
      public getHeadings () {
        console.log(this.h1Directives)
        console.log(this.h2Directives)
      }
    }

    return DynamicComponent
  }
}