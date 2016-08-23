import { NgModule } from '@angular/core'
import { COMPILER_PROVIDERS } from '@angular/compiler'
import { DynamicMarkdownComponent } from './dynamic-markdown.component'
import { MarkdownComponentService } from './markdown-component.service'

@NgModule({
  providers: [COMPILER_PROVIDERS, MarkdownComponentService],
  declarations: [DynamicMarkdownComponent],
  exports: [DynamicMarkdownComponent]
})
export class MarkdownToolsModule { }
