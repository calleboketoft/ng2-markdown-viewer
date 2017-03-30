// http://stackoverflow.com/questions/31548311/angular-2-html-binding
declare var fetch
import { Component, ViewChild, ElementRef } from '@angular/core'
import { FormControl } from '@angular/forms'

import * as markdownService from '../markdown-tools/markdown.service'
import { markdownStyles } from './markdown-styles'

@Component({
  selector: 'app',
  template: `
    <div class="container">
      <h2>Commonmark Example</h2>
      <div class="row">
        <div class="col-xs-4">
          <input type="text" class="form-control" placeholder="Markdown URL"
            [formControl]="markdownUrlInput">
        </div>
        <div class="col-xs-2" style="text-align: right;">
          <button type="button" class="btn btn-primary"
            (click)="fetchAndRender()">
            Render from URL
          </button>
        </div>
        <div class="col-xs-4">
          <textarea class="form-control"
            [formControl]="markdownTextInput" placeholder="Markdown Text"></textarea>
        </div>
        <div class="col-xs-2">
          <button type="button" class="btn btn-primary" (click)="renderFromTextareaHtml()">
            Render as HTML
          </button>
          <button type="button" class="btn btn-primary" (click)="renderFromTextareaText()">
            Render as Text
          </button>
        </div>
      </div>
      <hr>
      <markdown-viewer
        *ngIf="markdownHtml || markdownText"
        [template]="markdownHtml"
        [markdown]="markdownText"
        [styles]="[markdownStyles]">
      </markdown-viewer>
    </div>
  `
})
export class AppComponent {

  public markdownUrlInput = new FormControl('https://raw.githubusercontent.com/calleboketoft/ng2-markdown-viewer/master/README.md');
  public markdownTextInput = new FormControl(`# Example
## With headings
### Of different
## Sizes
### To try
#### ToC creation
# the
## End`)

  public markdownHtml
  public markdownText
  public markdownStyles = markdownStyles

  public fetchMarkdownText (url) {
    return fetch(url)
      .then(res => res.text())
      .then(resText => {
        return resText
      })
  }

  public fetchAndRender () {
    this.fetchMarkdownText(this.markdownUrlInput.value)
      .then((mdText) => {
        this.applyMarkdownHtml(mdText)
      })
  }

  public renderFromTextareaHtml () {
    this.applyMarkdownHtml(this.markdownTextInput.value)
  }

  public renderFromTextareaText () {
    this.applyMarkdownText(this.markdownTextInput.value)
  }

  public applyMarkdownHtml (mdText) {
    this.markdownHtml = markdownService.getCleanHtmlTextFromMarkdown(mdText)
  }

  public applyMarkdownText (mdText) {
    this.markdownText = mdText
  }
}
