import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'

import { MarkdownToolsModule } from '../markdown-tools/markdown-tools.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, MarkdownToolsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }