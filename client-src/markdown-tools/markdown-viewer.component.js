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
var markdown_component_service_1 = require('./structure-components/markdown-component.service');
var MarkdownViewerComponent = (function () {
    function MarkdownViewerComponent(jitCompiler, markdownComponentService) {
        this.jitCompiler = jitCompiler;
        this.markdownComponentService = markdownComponentService;
    }
    MarkdownViewerComponent.prototype.ngAfterViewInit = function () {
        if (this.template) {
            this.renderContent(this.template, this.styles);
        }
        else if (this.markdown) {
            var htmlFromMarkdown = markdown_service_1.getCleanHtmlTextFromMarkdown(this.markdown);
            this.renderContent(htmlFromMarkdown, this.styles);
        }
    };
    MarkdownViewerComponent.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    };
    MarkdownViewerComponent.prototype.renderContent = function (template, styles) {
        var _this = this;
        var dynamicComponent = this.markdownComponentService.buildDynamicComponent({
            template: template,
            styles: styles
        });
        var runtimeComponentModule = this.markdownComponentService.buildRuntimeComponentModule(dynamicComponent);
        // component and module to attach it to
        this.jitCompiler
            .compileModuleAndAllComponentsAsync(runtimeComponentModule)
            .then(function (moduleWithFactories) {
            // find THE factory (TODO should use deeper comparison to be sure)
            var factory = moduleWithFactories.componentFactories.find(function (moduleWithFactory) {
                return moduleWithFactory.componentType['name'] === dynamicComponent['name'];
            });
            _this.componentRef = _this.dynamicComponentTarget.createComponent(factory);
            var component = _this.componentRef.instance;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MarkdownViewerComponent.prototype, "markdown", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MarkdownViewerComponent.prototype, "template", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MarkdownViewerComponent.prototype, "styles", void 0);
    __decorate([
        core_1.ViewChild('dynamicComponentPlaceholder', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], MarkdownViewerComponent.prototype, "dynamicComponentTarget", void 0);
    MarkdownViewerComponent = __decorate([
        core_1.Component({
            selector: 'markdown-viewer',
            template: "<div #dynamicComponentPlaceholder></div>"
        }), 
        __metadata('design:paramtypes', [compiler_1.JitCompiler, markdown_component_service_1.MarkdownComponentService])
    ], MarkdownViewerComponent);
    return MarkdownViewerComponent;
}());
exports.MarkdownViewerComponent = MarkdownViewerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcmtkb3duLXZpZXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMERBQTBEOzs7Ozs7Ozs7OztBQUUxRCxxQkFVTyxlQUNQLENBQUMsQ0FEcUI7QUFDdEIseUJBQTRCLG1CQUU1QixDQUFDLENBRjhDO0FBRS9DLGlDQUE2QyxvQkFDN0MsQ0FBQyxDQURnRTtBQUVqRSwyQ0FBeUMsbURBRXpDLENBQUMsQ0FGMkY7QUFNNUY7SUFVRSxpQ0FDVSxXQUF3QixFQUN4Qix3QkFBa0Q7UUFEbEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUN6RCxDQUFDO0lBRUcsaURBQWUsR0FBdEI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxnQkFBZ0IsR0FBRywrQ0FBNEIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDbEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbkQsQ0FBQztJQUNILENBQUM7SUFFTSw2Q0FBVyxHQUFsQjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUE7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFTSwrQ0FBYSxHQUFwQixVQUFzQixRQUFRLEVBQUUsTUFBTTtRQUF0QyxpQkFrQkM7UUFqQkMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMscUJBQXFCLENBQUM7WUFDekUsa0JBQVE7WUFDUixjQUFNO1NBQ1AsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxzQkFBc0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsMkJBQTJCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUN4Ryx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFdBQVc7YUFDYixrQ0FBa0MsQ0FBQyxzQkFBc0IsQ0FBQzthQUN4RCxJQUFJLENBQUMsVUFBQyxtQkFBbUI7WUFDeEIsa0VBQWtFO1lBQ2xFLElBQUksT0FBTyxHQUFHLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFBLGlCQUFpQjtnQkFDekUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUM3RSxDQUFDLENBQUMsQ0FBQTtZQUVGLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUN4RSxJQUFJLFNBQVMsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQTtRQUM1QyxDQUFDLENBQUMsQ0FBQTtJQUNSLENBQUM7SUFoREQ7UUFBQyxZQUFLLEVBQUU7OzZEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzZEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzJEQUFBO0lBRVI7UUFBQyxnQkFBUyxDQUFDLDZCQUE2QixFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFnQixFQUFFLENBQUM7OzJFQUFBO0lBVHZFO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLDBDQUEwQztTQUNyRCxDQUFDOzsrQkFBQTtJQW1ERiw4QkFBQztBQUFELENBQUMsQUFsREQsSUFrREM7QUFsRFksK0JBQXVCLDBCQWtEbkMsQ0FBQSJ9