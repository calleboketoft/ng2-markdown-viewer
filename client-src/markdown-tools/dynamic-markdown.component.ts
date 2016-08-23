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

@Component({
  selector: 'dynamic-markdown',
  template: `<div #dynamicComponentPlaceholder></div>`
})
export class DynamicMarkdownComponent implements AfterViewInit, OnDestroy {
  @Input() template: string;
  @Input() styles: string[];

  @ViewChild('dynamicComponentPlaceholder', { read: ViewContainerRef })
  public dynamicComponentTarget: ViewContainerRef

  public componentRef: ComponentRef<any>;

  constructor (private runtimeCompiler: RuntimeCompiler) {}

  public ngAfterViewInit () {
    this.renderContent(this.template, this.styles)
  }

  public ngOnDestroy() {
    this.cleanUpComponentRef()
  }

  public cleanUpComponentRef () {
    if (this.componentRef) {
      this.componentRef.destroy()
      this.componentRef = null
    }
  }

  public buildComponent (template: string, styles: string[]) {
    @Component({
      selector: 'dynamic-component-spawn',
      template: template,
      styles: styles
    })
    class DynamicComponent { }

    return DynamicComponent
  }

  public renderContent (template, styles) {
    let builtComponent = this.buildComponent(template, styles)
    // component and module to attach it to
    this.runtimeCompiler
      .compileComponentAsync(builtComponent, MarkdownToolsModule)
      .then((factory: ComponentFactory<any>) => {
        this.componentRef = this.dynamicComponentTarget.createComponent(factory, 0)

        // a reference to the component in action
        let componentInstance = this.componentRef.instance
      })
  }
}
