# ng2-markdown

Runtime compilation of markdown to Angular 2 HTML template

- `npm install --save-dev @calle/ng2-markdown-viewer commonmark highlight.js`
- If you're using webpack you also need to use `json-loader` since `commonmark` loads JSON files
- `typings install dt~commonmark dt~highlightjs --global --save`
- Add the `MarkdownViewerModule` to your app:

```javascript
import { MarkdownViewerModule } from '@calle/ng2-markdown-viewer'
```

- The component is currently rendered only on ngAfterViewInit so you need to have the markdownText available before instantiating.
- Put the `markdown-viewer` component in your template:

```html
<markdown-viewer
  *ngIf="markdownText"
  [markdown]="markdownText"
  [styles]="[markdownStyles]">
</markdown-viewer>
```
