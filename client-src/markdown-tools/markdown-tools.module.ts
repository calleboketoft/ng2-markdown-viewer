import { NgModule } from '@angular/core'
import { COMPILER_PROVIDERS } from '@angular/compiler'
import { BrowserModule } from '@angular/platform-browser'
import { DynamicMarkdownComponent } from './dynamic-markdown.component'
import { MarkdownComponentService } from './structure-components/markdown-component.service'

@NgModule({
  imports: [BrowserModule],
  providers: [COMPILER_PROVIDERS, MarkdownComponentService],
  declarations: [DynamicMarkdownComponent],
  exports: [DynamicMarkdownComponent]
})
export class MarkdownToolsModule { }
