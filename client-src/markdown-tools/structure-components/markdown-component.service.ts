/**
 * The template for this component is the HTML generated from the Markdown file.
 * Directives here can add functionality to all the tags.
 */

import { NgModule, Component, ViewChildren, QueryList, ElementRef } from '@angular/core'
import { H1Directive } from './h1.directive'
import { H2Directive } from './h2.directive'
import { H3Directive } from './h3.directive'
import { H4Directive } from './h4.directive'
import { H5Directive } from './h5.directive'
import { MarkdownViewerModule } from '../markdown-viewer.module'

export class MarkdownComponentService {

  public buildDynamicComponent ({template, styles}) {

    let tocTemplate = `
      <table-of-contents
        *ngIf="pageElements"
        [pageElements]="pageElements">
      </table-of-contents>
    `

    // Dynamic component
    @Component({
      selector: 'markdown-dynamic-component-spawn',
      // TODO fix the ToC later
      // template: tocTemplate + template,
      template: template,
      styles,
    })
    class DynamicComponent {
      @ViewChildren(H1Directive) public h1Directives: QueryList<H1Directive>;
      @ViewChildren(H2Directive) public h2Directives: QueryList<H2Directive>;
      @ViewChildren(H3Directive) public h3Directives: QueryList<H3Directive>;
      @ViewChildren(H4Directive) public h4Directives: QueryList<H4Directive>;
      @ViewChildren(H5Directive) public h5Directives: QueryList<H5Directive>;

      public pageElements

      constructor (public elementRef: ElementRef) {}

      public ngAfterViewInit () {
        // // TODO not sure why I need this hack
        // setTimeout(() => {
        //   this.generateToc()
        // }, 0)
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

  public buildRuntimeComponentModule (DynamicComponent) {
    // Dynamic module
    @NgModule({
      // Module with heading directives etc.
      imports: [MarkdownViewerModule],
      declarations: [DynamicComponent]
    })
    class RuntimeComponentModule { }

    return RuntimeComponentModule
  }
}
