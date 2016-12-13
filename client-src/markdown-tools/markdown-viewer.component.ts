// Using JitCompiler to compile a component on the fly

import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ComponentFactory,
  NgModuleFactory,
  Input,
  OnDestroy
} from '@angular/core'
import { JitCompiler } from '@angular/compiler'

import { getCleanHtmlTextFromMarkdown } from './markdown.service'
import { MarkdownViewerModule } from './markdown-viewer.module'
import { MarkdownComponentService } from './structure-components/markdown-component.service'

@Component({
  selector: 'markdown-viewer',
  template: `<div #dynamicComponentPlaceholder></div>`
})
export class MarkdownViewerComponent implements AfterViewInit, OnDestroy {
  @Input() markdown: string;
  @Input() template: string;
  @Input() styles: string[];

  @ViewChild('dynamicComponentPlaceholder', { read: ViewContainerRef })
  public dynamicComponentTarget: ViewContainerRef;

  public componentRef: ComponentRef<any>;

  constructor (
    private jitCompiler: JitCompiler,
    private markdownComponentService: MarkdownComponentService
  ) {}

  public ngAfterViewInit () {
    if (this.template) {
      this.renderContent(this.template, this.styles)
    } else if (this.markdown) {
      let htmlFromMarkdown = getCleanHtmlTextFromMarkdown(this.markdown)
      this.renderContent(htmlFromMarkdown, this.styles)
    }
  }

  public ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy()
      this.componentRef = null
    }
  }

  public renderContent (template, styles) {
    let dynamicComponent = this.markdownComponentService.buildDynamicComponent({
      template,
      styles
    })
    let runtimeComponentModule = this.markdownComponentService.buildRuntimeComponentModule(dynamicComponent)
    // component and module to attach it to
    this.jitCompiler
      .compileModuleAndAllComponentsAsync(runtimeComponentModule)
        .then((moduleWithFactories) => {
          // find THE factory (TODO should use deeper comparison to be sure)
          let factory = moduleWithFactories.componentFactories.find(moduleWithFactory => {
            return moduleWithFactory.componentType['name'] === dynamicComponent['name']
          })

          this.componentRef = this.dynamicComponentTarget.createComponent(factory)
          let component = this.componentRef.instance
        })
  }
}
