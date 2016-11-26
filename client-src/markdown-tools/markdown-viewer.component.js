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
        __metadata('design:paramtypes', [compiler_1.RuntimeCompiler, markdown_component_service_1.MarkdownComponentService])
    ], MarkdownViewerComponent);
    return MarkdownViewerComponent;
}());
exports.MarkdownViewerComponent = MarkdownViewerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcmtkb3duLXZpZXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMERBQTBEOzs7Ozs7Ozs7OztBQUUxRCxxQkFVTyxlQUNQLENBQUMsQ0FEcUI7QUFDdEIseUJBQWdDLG1CQUVoQyxDQUFDLENBRmtEO0FBRW5ELGlDQUE2QyxvQkFDN0MsQ0FBQyxDQURnRTtBQUVqRSwyQ0FBeUMsbURBRXpDLENBQUMsQ0FGMkY7QUFNNUY7SUFVRSxpQ0FDVSxXQUE0QixFQUM1Qix3QkFBa0Q7UUFEbEQsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQzVCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFDekQsQ0FBQztJQUVHLGlEQUFlLEdBQXRCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoRCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksZ0JBQWdCLEdBQUcsK0NBQTRCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ2xFLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ25ELENBQUM7SUFDSCxDQUFDO0lBRU0sNkNBQVcsR0FBbEI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFBO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRU0sK0NBQWEsR0FBcEIsVUFBc0IsUUFBUSxFQUFFLE1BQU07UUFBdEMsaUJBa0JDO1FBakJDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDO1lBQ3pFLGtCQUFRO1lBQ1IsY0FBTTtTQUNQLENBQUMsQ0FBQTtRQUNGLElBQUksc0JBQXNCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLDJCQUEyQixDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDeEcsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXO2FBQ2Isa0NBQWtDLENBQUMsc0JBQXNCLENBQUM7YUFDeEQsSUFBSSxDQUFDLFVBQUMsbUJBQW1CO1lBQ3hCLGtFQUFrRTtZQUNsRSxJQUFJLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBQSxpQkFBaUI7Z0JBQ3pFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDN0UsQ0FBQyxDQUFDLENBQUE7WUFFRixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDeEUsSUFBSSxTQUFTLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUE7UUFDNUMsQ0FBQyxDQUFDLENBQUE7SUFDUixDQUFDO0lBaEREO1FBQUMsWUFBSyxFQUFFOzs2REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs2REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsyREFBQTtJQUVSO1FBQUMsZ0JBQVMsQ0FBQyw2QkFBNkIsRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBZ0IsRUFBRSxDQUFDOzsyRUFBQTtJQVR2RTtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSwwQ0FBMEM7U0FDckQsQ0FBQzs7K0JBQUE7SUFtREYsOEJBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDO0FBbERZLCtCQUF1QiwwQkFrRG5DLENBQUEifQ==