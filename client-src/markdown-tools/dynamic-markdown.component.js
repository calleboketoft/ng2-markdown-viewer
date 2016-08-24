// Using RuntimeCompiler to compile a component on the fly
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var compiler_1 = require('@angular/compiler');
var markdown_service_1 = require('./markdown.service');
var markdown_tools_module_1 = require('./markdown-tools.module');
var markdown_component_service_1 = require('./structure-components/markdown-component.service');
var DynamicMarkdownComponent = (function () {
    function DynamicMarkdownComponent(runtimeCompiler, markdownComponentService) {
        this.runtimeCompiler = runtimeCompiler;
        this.markdownComponentService = markdownComponentService;
    }
    DynamicMarkdownComponent.prototype.ngAfterViewInit = function () {
        if (this.template) {
            this.renderContent(this.template, this.styles);
        }
        else if (this.markdown) {
            var htmlFromMarkdown = markdown_service_1.getCleanHtmlTextFromMarkdown(this.markdown);
            this.renderContent(htmlFromMarkdown, this.styles);
        }
    };
    DynamicMarkdownComponent.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    };
    DynamicMarkdownComponent.prototype.renderContent = function (template, styles) {
        var _this = this;
        var builtComponent = this.markdownComponentService.buildComponent({
            template: template,
            styles: styles
        });
        // component and module to attach it to
        this.runtimeCompiler
            .compileComponentAsync(builtComponent, markdown_tools_module_1.MarkdownToolsModule)
            .then(function (factory) {
            _this.componentRef = _this.dynamicComponentTarget.createComponent(factory, 0);
            // a reference to the newly compiled component instance
            var componentInstance = _this.componentRef.instance;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DynamicMarkdownComponent.prototype, "template", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DynamicMarkdownComponent.prototype, "styles", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DynamicMarkdownComponent.prototype, "markdown", void 0);
    __decorate([
        core_1.ViewChild('dynamicComponentPlaceholder', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], DynamicMarkdownComponent.prototype, "dynamicComponentTarget", void 0);
    DynamicMarkdownComponent = __decorate([
        core_1.Component({
            selector: 'dynamic-markdown',
            template: "<div #dynamicComponentPlaceholder></div>"
        }), 
        __metadata('design:paramtypes', [compiler_1.RuntimeCompiler, markdown_component_service_1.MarkdownComponentService])
    ], DynamicMarkdownComponent);
    return DynamicMarkdownComponent;
}());
exports.DynamicMarkdownComponent = DynamicMarkdownComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tYXJrZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkeW5hbWljLW1hcmtkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwREFBMEQ7Ozs7Ozs7Ozs7O0FBRTFELHFCQVNPLGVBQ1AsQ0FBQyxDQURxQjtBQUN0Qix5QkFBZ0MsbUJBRWhDLENBQUMsQ0FGa0Q7QUFFbkQsaUNBQTZDLG9CQUM3QyxDQUFDLENBRGdFO0FBQ2pFLHNDQUFvQyx5QkFDcEMsQ0FBQyxDQUQ0RDtBQUM3RCwyQ0FBeUMsbURBRXpDLENBQUMsQ0FGMkY7QUFNNUY7SUFVRSxrQ0FDVSxlQUFnQyxFQUNoQyx3QkFBa0Q7UUFEbEQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFDekQsQ0FBQztJQUVHLGtEQUFlLEdBQXRCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoRCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksZ0JBQWdCLEdBQUcsK0NBQTRCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ2xFLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ25ELENBQUM7SUFDSCxDQUFDO0lBRU0sOENBQVcsR0FBbEI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFBO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRU0sZ0RBQWEsR0FBcEIsVUFBc0IsUUFBUSxFQUFFLE1BQU07UUFBdEMsaUJBY0M7UUFiQyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDO1lBQ2hFLFVBQUEsUUFBUTtZQUNSLFFBQUEsTUFBTTtTQUNQLENBQUMsQ0FBQTtRQUNGLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsZUFBZTthQUNqQixxQkFBcUIsQ0FBQyxjQUFjLEVBQUUsMkNBQW1CLENBQUM7YUFDMUQsSUFBSSxDQUFDLFVBQUMsT0FBOEI7WUFDbkMsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUUzRSx1REFBdUQ7WUFDdkQsSUFBSSxpQkFBaUIsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQTtRQUNwRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE1Q0Q7UUFBQyxZQUFLLEVBQUU7OzhEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzREQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzhEQUFBO0lBRVI7UUFBQyxnQkFBUyxDQUFDLDZCQUE2QixFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFnQixFQUFFLENBQUM7OzRFQUFBO0lBVHZFO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLDBDQUEwQztTQUNyRCxDQUFDOztnQ0FBQTtJQStDRiwrQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7QUE5Q1ksZ0NBQXdCLDJCQThDcEMsQ0FBQSJ9