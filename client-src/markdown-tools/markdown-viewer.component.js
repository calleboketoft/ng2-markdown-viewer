// Using JitCompiler to compile a component on the fly
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var compiler_1 = require("@angular/compiler");
var markdown_service_1 = require("./markdown.service");
var markdown_component_service_1 = require("./structure-components/markdown-component.service");
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
    return MarkdownViewerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MarkdownViewerComponent.prototype, "markdown", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MarkdownViewerComponent.prototype, "template", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MarkdownViewerComponent.prototype, "styles", void 0);
__decorate([
    core_1.ViewChild('dynamicComponentPlaceholder', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], MarkdownViewerComponent.prototype, "dynamicComponentTarget", void 0);
MarkdownViewerComponent = __decorate([
    core_1.Component({
        selector: 'markdown-viewer',
        template: "<div #dynamicComponentPlaceholder></div>"
    }),
    __metadata("design:paramtypes", [compiler_1.JitCompiler,
        markdown_component_service_1.MarkdownComponentService])
], MarkdownViewerComponent);
exports.MarkdownViewerComponent = MarkdownViewerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcmtkb3duLXZpZXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0RBQXNEOzs7Ozs7Ozs7Ozs7QUFFdEQsc0NBVXNCO0FBQ3RCLDhDQUErQztBQUUvQyx1REFBaUU7QUFFakUsZ0dBQTRGO0FBTTVGLElBQWEsdUJBQXVCO0lBVWxDLGlDQUNVLFdBQXdCLEVBQ3hCLHdCQUFrRDtRQURsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQ3pELENBQUM7SUFFRyxpREFBZSxHQUF0QjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLGdCQUFnQixHQUFHLCtDQUE0QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNsRSxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNuRCxDQUFDO0lBQ0gsQ0FBQztJQUVNLDZDQUFXLEdBQWxCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVNLCtDQUFhLEdBQXBCLFVBQXNCLFFBQVEsRUFBRSxNQUFNO1FBQXRDLGlCQWtCQztRQWpCQyxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQztZQUN6RSxRQUFRLFVBQUE7WUFDUixNQUFNLFFBQUE7U0FDUCxDQUFDLENBQUE7UUFDRixJQUFJLHNCQUFzQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQywyQkFBMkIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3hHLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsV0FBVzthQUNiLGtDQUFrQyxDQUFDLHNCQUFzQixDQUFDO2FBQ3hELElBQUksQ0FBQyxVQUFDLG1CQUFtQjtZQUN4QixrRUFBa0U7WUFDbEUsSUFBSSxPQUFPLEdBQUcsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQUEsaUJBQWlCO2dCQUN6RSxNQUFNLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzdFLENBQUMsQ0FBQyxDQUFBO1lBRUYsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3hFLElBQUksU0FBUyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFBO1FBQzVDLENBQUMsQ0FBQyxDQUFBO0lBQ1IsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQztBQWpEVTtJQUFSLFlBQUssRUFBRTs7eURBQWlCO0FBQ2hCO0lBQVIsWUFBSyxFQUFFOzt5REFBaUI7QUFDaEI7SUFBUixZQUFLLEVBQUU7O3VEQUFpQjtBQUd6QjtJQURDLGdCQUFTLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQWdCLEVBQUUsQ0FBQzs4QkFDdEMsdUJBQWdCO3VFQUFBO0FBTnBDLHVCQUF1QjtJQUpuQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUUsMENBQTBDO0tBQ3JELENBQUM7cUNBWXVCLHNCQUFXO1FBQ0UscURBQXdCO0dBWmpELHVCQUF1QixDQWtEbkM7QUFsRFksMERBQXVCIn0=