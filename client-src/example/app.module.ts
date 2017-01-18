import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'

import { MarkdownViewerModule } from '../markdown-tools/markdown-viewer.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MarkdownViewerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
