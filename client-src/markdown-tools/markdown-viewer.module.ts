import { NgModule } from '@angular/core'
import { COMPILER_PROVIDERS } from '@angular/compiler'
import { BrowserModule } from '@angular/platform-browser'
import { MarkdownViewerComponent } from './markdown-viewer.component'
import { MarkdownComponentService } from './structure-components/markdown-component.service'
import { H1Directive } from './structure-components/h1.directive'
import { H2Directive } from './structure-components/h2.directive'
import { H3Directive } from './structure-components/h3.directive'
import { H4Directive } from './structure-components/h4.directive'
import { H5Directive } from './structure-components/h5.directive'
import { TableOfContentsComponent } from './structure-components/table-of-contents.component'

@NgModule({
  imports: [BrowserModule],
  providers: [
    COMPILER_PROVIDERS,
    MarkdownComponentService
  ],
  declarations: [
    MarkdownViewerComponent,
    H1Directive,
    H2Directive,
    H3Directive,
    H4Directive,
    H5Directive,
    TableOfContentsComponent
  ],
  exports: [
    MarkdownViewerComponent
  ]
})
export class MarkdownViewerModule { }
