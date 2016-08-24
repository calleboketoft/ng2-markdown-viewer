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
var markdown_tools_module_1 = require('./markdown-tools.module');
var markdown_component_service_1 = require('./structure-components/markdown-component.service');
var DynamicMarkdownComponent = (function () {
    function DynamicMarkdownComponent(runtimeCompiler, markdownComponentService) {
        this.runtimeCompiler = runtimeCompiler;
        this.markdownComponentService = markdownComponentService;
    }
    DynamicMarkdownComponent.prototype.ngAfterViewInit = function () {
        this.renderContent(this.template, this.styles);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tYXJrZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkeW5hbWljLW1hcmtkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwREFBMEQ7Ozs7Ozs7Ozs7O0FBRTFELHFCQVNPLGVBQ1AsQ0FBQyxDQURxQjtBQUN0Qix5QkFBZ0MsbUJBRWhDLENBQUMsQ0FGa0Q7QUFFbkQsc0NBQW9DLHlCQUNwQyxDQUFDLENBRDREO0FBQzdELDJDQUF5QyxtREFFekMsQ0FBQyxDQUYyRjtBQU01RjtJQVNFLGtDQUNVLGVBQWdDLEVBQ2hDLHdCQUFrRDtRQURsRCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUN6RCxDQUFDO0lBRUcsa0RBQWUsR0FBdEI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFTSw4Q0FBVyxHQUFsQjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUE7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFTSxnREFBYSxHQUFwQixVQUFzQixRQUFRLEVBQUUsTUFBTTtRQUF0QyxpQkFjQztRQWJDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUM7WUFDaEUsVUFBQSxRQUFRO1lBQ1IsUUFBQSxNQUFNO1NBQ1AsQ0FBQyxDQUFBO1FBQ0YsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxlQUFlO2FBQ2pCLHFCQUFxQixDQUFDLGNBQWMsRUFBRSwyQ0FBbUIsQ0FBQzthQUMxRCxJQUFJLENBQUMsVUFBQyxPQUE4QjtZQUNuQyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBRTNFLHVEQUF1RDtZQUN2RCxJQUFJLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFBO1FBQ3BELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXRDRDtRQUFDLFlBQUssRUFBRTs7OERBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NERBQUE7SUFFUjtRQUFDLGdCQUFTLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQWdCLEVBQUUsQ0FBQzs7NEVBQUE7SUFSdkU7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsMENBQTBDO1NBQ3JELENBQUM7O2dDQUFBO0lBeUNGLCtCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQXhDWSxnQ0FBd0IsMkJBd0NwQyxDQUFBIn0=