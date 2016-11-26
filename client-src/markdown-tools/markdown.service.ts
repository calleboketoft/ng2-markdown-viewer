// Use 3rd party libs to generate HTML from Markdown

import * as commonmark from 'commonmark'
import * as hljs from 'highlight.js'

export {
  markdownToHtmlUsingCommonmark,
  applyHighlightingToHtml,
  cleanCurlyBracesInHtml,
  getCleanHtmlTextFromMarkdown
}

let commonmarkReader = new commonmark.Parser()
let commonmarkWriter = new commonmark.HtmlRenderer()

function markdownToHtmlUsingCommonmark (markdownText: string): HTMLElement {
  let parsed = commonmarkReader.parse(markdownText)
  let markdownHtml = commonmarkWriter.render(parsed)

  let div = document.createElement('div')
  div.className = 'markdown-body'
  div.innerHTML = markdownHtml
  return div
}

function applyHighlightingToHtml (domElement: HTMLElement): HTMLElement {
  // pure function, clone the input
  let domElCopy = <HTMLElement>domElement.cloneNode(true)
  Array.prototype.slice.call(domElCopy.querySelectorAll('pre code'))
    .forEach((block) => hljs.highlightBlock(block))
  return domElCopy
}

function cleanCurlyBracesInHtml (htmlText) {
  // Handle curly braces within text (Angular 2 doesn't like)
  let htmlTextFixed = htmlText.replace(/{/g, '&#123;')
  htmlTextFixed = htmlTextFixed.replace(/}/g, '&#125;')
  return htmlTextFixed
}

function getCleanHtmlTextFromMarkdown (mdText) {
  let mdHtmlEl = markdownToHtmlUsingCommonmark(mdText)
  let mdHtmlElHighlight = applyHighlightingToHtml(mdHtmlEl)
  return cleanCurlyBracesInHtml(mdHtmlElHighlight.outerHTML)
}
