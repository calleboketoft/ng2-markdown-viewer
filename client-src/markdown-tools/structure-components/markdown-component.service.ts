/**
 * The template for this component is the HTML generated from the Markdown file.
 * Directives here can add functionality to all the tags.
 */

import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core'
import { H1Directive } from './h1.directive'
import { H2Directive } from './h2.directive'
import { H3Directive } from './h3.directive'
import { H4Directive } from './h4.directive'
import { H5Directive } from './h5.directive'
import { TableOfContentsComponent } from './table-of-contents.component'

export class MarkdownComponentService {

  public buildComponent ({template, styles}) {

    // TODO give the possibility to provide a custom table of contents
    // template
    let tocTemplate = `
      <table-of-contents
        *ngIf="pageElements"
        [pageElements]="pageElements">
      </table-of-contents>
    `

    @Component({
      selector: 'dynamic-component-spawn',
      template: tocTemplate + template,
      styles,
      directives: [
        H1Directive, H2Directive, H3Directive, H4Directive, H5Directive,
        TableOfContentsComponent
      ]
    })
    class DynamicComponent {
      @ViewChildren(H1Directive) public h1Directives: QueryList<H1Directive>;
      @ViewChildren(H2Directive) public h2Directives: QueryList<H2Directive>;
      @ViewChildren(H3Directive) public h3Directives: QueryList<H3Directive>;
      @ViewChildren(H4Directive) public h4Directives: QueryList<H4Directive>;
      @ViewChildren(H5Directive) public h5Directives: QueryList<H5Directive>;

      public pageElements;

      constructor (public elementRef: ElementRef) {}

      public ngAfterViewInit () {
        // TODO not sure why I need this hack
        setTimeout(() => {
          this.generateToc()
        }, 0)
      }

      public generateToc () {
        let headingDirectives = {
          h1: this.h1Directives.toArray(),
          h2: this.h2Directives.toArray(),
          h3: this.h3Directives.toArray(),
          h4: this.h4Directives.toArray(),
          h5: this.h5Directives.toArray()
        }

        // Order all the heading directives and add to pageElements for ToC
        this.pageElements = Array.prototype.slice.call(this.elementRef
          .nativeElement
          .querySelectorAll('h1, h2, h3, h4, h5'))
          .map(headingEl => headingDirectives[headingEl.localName].shift(0))
      }
    }

    return DynamicComponent
  }
}