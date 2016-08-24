import { NgModule } from '@angular/core'
import { COMPILER_PROVIDERS } from '@angular/compiler'
import { BrowserModule } from '@angular/platform-browser'
import { MarkdownViewerComponent } from './markdown-viewer.component'
import { MarkdownComponentService } from './structure-components/markdown-component.service'

@NgModule({
  imports: [BrowserModule],
  providers: [COMPILER_PROVIDERS, MarkdownComponentService],
  declarations: [MarkdownViewerComponent],
  exports: [MarkdownViewerComponent]
})
export class MarkdownViewerModule { }
