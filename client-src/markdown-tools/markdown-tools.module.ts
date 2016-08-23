import { NgModule } from '@angular/core'
import { COMPILER_PROVIDERS } from '@angular/compiler'
import { DynamicMarkdownComponent } from './dynamic-markdown.component'

@NgModule({
  providers: [COMPILER_PROVIDERS],
  declarations: [DynamicMarkdownComponent],
  exports: [DynamicMarkdownComponent]
})
export class MarkdownToolsModule { }
