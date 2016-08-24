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
var markdown_viewer_module_1 = require('./markdown-viewer.module');
var markdown_component_service_1 = require('./structure-components/markdown-component.service');
var MarkdownViewerComponent = (function () {
    function MarkdownViewerComponent(runtimeCompiler, markdownComponentService) {
        this.runtimeCompiler = runtimeCompiler;
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
        var builtComponent = this.markdownComponentService.buildComponent({
            template: template,
            styles: styles
        });
        // component and module to attach it to
        this.runtimeCompiler
            .compileComponentAsync(builtComponent, markdown_viewer_module_1.MarkdownViewerModule)
            .then(function (factory) {
            _this.componentRef = _this.dynamicComponentTarget.createComponent(factory, 0);
            // a reference to the newly compiled component instance
            var componentInstance = _this.componentRef.instance;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcmtkb3duLXZpZXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMERBQTBEOzs7Ozs7Ozs7OztBQUUxRCxxQkFTTyxlQUNQLENBQUMsQ0FEcUI7QUFDdEIseUJBQWdDLG1CQUVoQyxDQUFDLENBRmtEO0FBRW5ELGlDQUE2QyxvQkFDN0MsQ0FBQyxDQURnRTtBQUNqRSx1Q0FBcUMsMEJBQ3JDLENBQUMsQ0FEOEQ7QUFDL0QsMkNBQXlDLG1EQUV6QyxDQUFDLENBRjJGO0FBTTVGO0lBVUUsaUNBQ1UsZUFBZ0MsRUFDaEMsd0JBQWtEO1FBRGxELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQ3pELENBQUM7SUFFRyxpREFBZSxHQUF0QjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLGdCQUFnQixHQUFHLCtDQUE0QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNsRSxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNuRCxDQUFDO0lBQ0gsQ0FBQztJQUVNLDZDQUFXLEdBQWxCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVNLCtDQUFhLEdBQXBCLFVBQXNCLFFBQVEsRUFBRSxNQUFNO1FBQXRDLGlCQWNDO1FBYkMsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQztZQUNoRSxVQUFBLFFBQVE7WUFDUixRQUFBLE1BQU07U0FDUCxDQUFDLENBQUE7UUFDRix1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLGVBQWU7YUFDakIscUJBQXFCLENBQUMsY0FBYyxFQUFFLDZDQUFvQixDQUFDO2FBQzNELElBQUksQ0FBQyxVQUFDLE9BQThCO1lBQ25DLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFFM0UsdURBQXVEO1lBQ3ZELElBQUksaUJBQWlCLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUE7UUFDcEQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBNUNEO1FBQUMsWUFBSyxFQUFFOzs2REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs2REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsyREFBQTtJQUVSO1FBQUMsZ0JBQVMsQ0FBQyw2QkFBNkIsRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBZ0IsRUFBRSxDQUFDOzsyRUFBQTtJQVR2RTtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSwwQ0FBMEM7U0FDckQsQ0FBQzs7K0JBQUE7SUErQ0YsOEJBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBOUNZLCtCQUF1QiwwQkE4Q25DLENBQUEifQ==