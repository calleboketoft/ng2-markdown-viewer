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
var DynamicMarkdownComponent = (function () {
    function DynamicMarkdownComponent(runtimeCompiler) {
        this.runtimeCompiler = runtimeCompiler;
    }
    DynamicMarkdownComponent.prototype.ngAfterViewInit = function () {
        this.renderContent(this.template, this.styles);
    };
    DynamicMarkdownComponent.prototype.ngOnDestroy = function () {
        this.cleanUpComponentRef();
    };
    DynamicMarkdownComponent.prototype.cleanUpComponentRef = function () {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    };
    DynamicMarkdownComponent.prototype.buildComponent = function (template, styles) {
        var DynamicComponent = (function () {
            function DynamicComponent() {
            }
            DynamicComponent = __decorate([
                core_1.Component({
                    selector: 'dynamic-component-spawn',
                    template: template,
                    styles: styles
                }), 
                __metadata('design:paramtypes', [])
            ], DynamicComponent);
            return DynamicComponent;
        }());
        return DynamicComponent;
    };
    DynamicMarkdownComponent.prototype.renderContent = function (template, styles) {
        var _this = this;
        var builtComponent = this.buildComponent(template, styles);
        // component and module to attach it to
        this.runtimeCompiler
            .compileComponentAsync(builtComponent, markdown_tools_module_1.MarkdownToolsModule)
            .then(function (factory) {
            _this.componentRef = _this.dynamicComponentTarget.createComponent(factory, 0);
            // a reference to the component in action
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
        __metadata('design:paramtypes', [compiler_1.RuntimeCompiler])
    ], DynamicMarkdownComponent);
    return DynamicMarkdownComponent;
}());
exports.DynamicMarkdownComponent = DynamicMarkdownComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tYXJrZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkeW5hbWljLW1hcmtkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwREFBMEQ7Ozs7Ozs7Ozs7O0FBRTFELHFCQVNPLGVBQ1AsQ0FBQyxDQURxQjtBQUN0Qix5QkFBZ0MsbUJBQ2hDLENBQUMsQ0FEa0Q7QUFDbkQsc0NBQW9DLHlCQUVwQyxDQUFDLENBRjREO0FBTTdEO0lBU0Usa0NBQXFCLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFbEQsa0RBQWUsR0FBdEI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFTSw4Q0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSxzREFBbUIsR0FBMUI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFBO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRU0saURBQWMsR0FBckIsVUFBdUIsUUFBZ0IsRUFBRSxNQUFnQjtRQU12RDtZQUFBO1lBQXlCLENBQUM7WUFMMUI7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsTUFBTSxFQUFFLE1BQU07aUJBQ2YsQ0FBQzs7Z0NBQUE7WUFDdUIsdUJBQUM7UUFBRCxDQUFDLEFBQTFCLElBQTBCO1FBRTFCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQTtJQUN6QixDQUFDO0lBRU0sZ0RBQWEsR0FBcEIsVUFBc0IsUUFBUSxFQUFFLE1BQU07UUFBdEMsaUJBV0M7UUFWQyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUMxRCx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLGVBQWU7YUFDakIscUJBQXFCLENBQUMsY0FBYyxFQUFFLDJDQUFtQixDQUFDO2FBQzFELElBQUksQ0FBQyxVQUFDLE9BQThCO1lBQ25DLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFFM0UseUNBQXlDO1lBQ3pDLElBQUksaUJBQWlCLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUE7UUFDcEQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBL0NEO1FBQUMsWUFBSyxFQUFFOzs4REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs0REFBQTtJQUVSO1FBQUMsZ0JBQVMsQ0FBQyw2QkFBNkIsRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBZ0IsRUFBRSxDQUFDOzs0RUFBQTtJQVJ2RTtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSwwQ0FBMEM7U0FDckQsQ0FBQzs7Z0NBQUE7SUFrREYsK0JBQUM7QUFBRCxDQUFDLEFBakRELElBaURDO0FBakRZLGdDQUF3QiwyQkFpRHBDLENBQUEifQ==