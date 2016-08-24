// Using RuntimeCompiler to compile a component on the fly

import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ComponentFactory,
  Input,
  OnDestroy
} from '@angular/core'
import { RuntimeCompiler } from '@angular/compiler'

import { MarkdownToolsModule } from './markdown-tools.module'
import { MarkdownComponentService } from './structure-components/markdown-component.service'

@Component({
  selector: 'dynamic-markdown',
  template: `<div #dynamicComponentPlaceholder></div>`
})
export class DynamicMarkdownComponent implements AfterViewInit, OnDestroy {
  @Input() template: string;
  @Input() styles: string[];

  @ViewChild('dynamicComponentPlaceholder', { read: ViewContainerRef })
  public dynamicComponentTarget: ViewContainerRef;

  public componentRef: ComponentRef<any>;

  constructor (
    private runtimeCompiler: RuntimeCompiler,
    private markdownComponentService: MarkdownComponentService
  ) {}

  public ngAfterViewInit () {
    this.renderContent(this.template, this.styles)
  }

  public ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy()
      this.componentRef = null
    }
  }

  public renderContent (template, styles) {
    let builtComponent = this.markdownComponentService.buildComponent({
      template,
      styles
    })
    // component and module to attach it to
    this.runtimeCompiler
      .compileComponentAsync(builtComponent, MarkdownToolsModule)
      .then((factory: ComponentFactory<any>) => {
        this.componentRef = this.dynamicComponentTarget.createComponent(factory, 0)

        // a reference to the newly compiled component instance
        let componentInstance = this.componentRef.instance
      })
  }
}
