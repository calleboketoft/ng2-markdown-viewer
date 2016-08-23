/**
 * The template for this component is the HTML generated from the Markdown file.
 * Directives here can add functionality to all the tags.
 */

import { Component, ViewChildren, QueryList } from '@angular/core'
import { H1Directive } from './h1.directive'
import { H2Directive } from './h2.directive'

export class MarkdownComponentService {

  public buildComponent ({template, styles}) {
    @Component({
      selector: 'dynamic-component-spawn',
      template: template,
      styles,
      directives: [
        H1Directive,
        H2Directive
      ]
    })
    class DynamicComponent {
      @ViewChildren(H1Directive) public h1Directives: QueryList<H1Directive>;
      @ViewChildren(H2Directive) public h2Directives: QueryList<H2Directive>;

      public getHeadings () {
        console.log(this.h1Directives)
        console.log(this.h2Directives)
      }
    }

    return DynamicComponent
  }
}