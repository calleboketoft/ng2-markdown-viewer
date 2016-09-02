/**
 * The template for this component is the HTML generated from the Markdown file.
 * Directives here can add functionality to all the tags.
 */
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
var h1_directive_1 = require('./h1.directive');
var h2_directive_1 = require('./h2.directive');
var h3_directive_1 = require('./h3.directive');
var h4_directive_1 = require('./h4.directive');
var h5_directive_1 = require('./h5.directive');
var markdown_viewer_module_1 = require('../markdown-viewer.module');
var MarkdownComponentService = (function () {
    function MarkdownComponentService() {
    }
    MarkdownComponentService.prototype.buildDynamicComponent = function (_a) {
        var template = _a.template, styles = _a.styles;
        var tocTemplate = "\n      <table-of-contents\n        *ngIf=\"pageElements\"\n        [pageElements]=\"pageElements\">\n      </table-of-contents>\n    ";
        // Dynamic component
        var DynamicComponent = (function () {
            function DynamicComponent(elementRef) {
                this.elementRef = elementRef;
            }
            DynamicComponent.prototype.ngAfterViewInit = function () {
                // // TODO not sure why I need this hack
                // setTimeout(() => {
                //   this.generateToc()
                // }, 0)
            };
            DynamicComponent.prototype.generateToc = function () {
                var headingDirectives = {
                    h1: this.h1Directives.toArray(),
                    h2: this.h2Directives.toArray(),
                    h3: this.h3Directives.toArray(),
                    h4: this.h4Directives.toArray(),
                    h5: this.h5Directives.toArray()
                };
                // Order all the heading directives and add to pageElements for ToC
                this.pageElements = Array.prototype.slice.call(this.elementRef
                    .nativeElement
                    .querySelectorAll('h1, h2, h3, h4, h5'))
                    .map(function (headingEl) { return headingDirectives[headingEl.localName].shift(0); });
            };
            __decorate([
                core_1.ViewChildren(h1_directive_1.H1Directive), 
                __metadata('design:type', core_1.QueryList)
            ], DynamicComponent.prototype, "h1Directives", void 0);
            __decorate([
                core_1.ViewChildren(h2_directive_1.H2Directive), 
                __metadata('design:type', core_1.QueryList)
            ], DynamicComponent.prototype, "h2Directives", void 0);
            __decorate([
                core_1.ViewChildren(h3_directive_1.H3Directive), 
                __metadata('design:type', core_1.QueryList)
            ], DynamicComponent.prototype, "h3Directives", void 0);
            __decorate([
                core_1.ViewChildren(h4_directive_1.H4Directive), 
                __metadata('design:type', core_1.QueryList)
            ], DynamicComponent.prototype, "h4Directives", void 0);
            __decorate([
                core_1.ViewChildren(h5_directive_1.H5Directive), 
                __metadata('design:type', core_1.QueryList)
            ], DynamicComponent.prototype, "h5Directives", void 0);
            DynamicComponent = __decorate([
                core_1.Component({
                    selector: 'markdown-dynamic-component-spawn',
                    // TODO fix the ToC later
                    // template: tocTemplate + template,
                    template: template,
                    styles: styles,
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef])
            ], DynamicComponent);
            return DynamicComponent;
        }());
        return DynamicComponent;
    };
    MarkdownComponentService.prototype.buildRuntimeComponentModule = function (DynamicComponent) {
        // Dynamic module
        var RuntimeComponentModule = (function () {
            function RuntimeComponentModule() {
            }
            RuntimeComponentModule = __decorate([
                core_1.NgModule({
                    // Module with heading directives etc.
                    imports: [markdown_viewer_module_1.MarkdownViewerModule],
                    declarations: [DynamicComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], RuntimeComponentModule);
            return RuntimeComponentModule;
        }());
        return RuntimeComponentModule;
    };
    return MarkdownComponentService;
}());
exports.MarkdownComponentService = MarkdownComponentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tY29tcG9uZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXJrZG93bi1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7Ozs7Ozs7Ozs7O0FBRUgscUJBQXlFLGVBQ3pFLENBQUMsQ0FEdUY7QUFDeEYsNkJBQTRCLGdCQUM1QixDQUFDLENBRDJDO0FBQzVDLDZCQUE0QixnQkFDNUIsQ0FBQyxDQUQyQztBQUM1Qyw2QkFBNEIsZ0JBQzVCLENBQUMsQ0FEMkM7QUFDNUMsNkJBQTRCLGdCQUM1QixDQUFDLENBRDJDO0FBQzVDLDZCQUE0QixnQkFDNUIsQ0FBQyxDQUQyQztBQUM1Qyx1Q0FBcUMsMkJBRXJDLENBQUMsQ0FGK0Q7QUFFaEU7SUFBQTtJQW9FQSxDQUFDO0lBbEVRLHdEQUFxQixHQUE1QixVQUE4QixFQUFrQjtZQUFqQixzQkFBUSxFQUFFLGtCQUFNO1FBRTdDLElBQUksV0FBVyxHQUFHLHdJQUtqQixDQUFBO1FBRUQsb0JBQW9CO1FBUXBCO1lBU0UsMEJBQW9CLFVBQXNCO2dCQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1lBQUcsQ0FBQztZQUV2QywwQ0FBZSxHQUF0QjtnQkFDRSx3Q0FBd0M7Z0JBQ3hDLHFCQUFxQjtnQkFDckIsdUJBQXVCO2dCQUN2QixRQUFRO1lBQ1YsQ0FBQztZQUVNLHNDQUFXLEdBQWxCO2dCQUNFLElBQUksaUJBQWlCLEdBQUc7b0JBQ3RCLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtvQkFDL0IsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO29CQUMvQixFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQy9CLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtvQkFDL0IsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO2lCQUNoQyxDQUFBO2dCQUVELG1FQUFtRTtnQkFDbkUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7cUJBQzNELGFBQWE7cUJBQ2IsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztxQkFDdkMsR0FBRyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxDQUFBO1lBQ3RFLENBQUM7WUEvQkQ7Z0JBQUMsbUJBQVksQ0FBQywwQkFBVyxDQUFDOztrRUFBQTtZQUMxQjtnQkFBQyxtQkFBWSxDQUFDLDBCQUFXLENBQUM7O2tFQUFBO1lBQzFCO2dCQUFDLG1CQUFZLENBQUMsMEJBQVcsQ0FBQzs7a0VBQUE7WUFDMUI7Z0JBQUMsbUJBQVksQ0FBQywwQkFBVyxDQUFDOztrRUFBQTtZQUMxQjtnQkFBQyxtQkFBWSxDQUFDLDBCQUFXLENBQUM7O2tFQUFBO1lBWjVCO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztvQkFDNUMseUJBQXlCO29CQUN6QixvQ0FBb0M7b0JBQ3BDLFFBQVEsRUFBRSxRQUFRO29CQUNsQixjQUFNO2lCQUNQLENBQUM7O2dDQUFBO1lBa0NGLHVCQUFDO1FBQUQsQ0FBQyxBQWpDRCxJQWlDQztRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQTtJQUN6QixDQUFDO0lBRU0sOERBQTJCLEdBQWxDLFVBQW9DLGdCQUFnQjtRQUNsRCxpQkFBaUI7UUFNakI7WUFBQTtZQUErQixDQUFDO1lBTGhDO2dCQUFDLGVBQVEsQ0FBQztvQkFDUixzQ0FBc0M7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLDZDQUFvQixDQUFDO29CQUMvQixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDakMsQ0FBQzs7c0NBQUE7WUFDNkIsNkJBQUM7UUFBRCxDQUFDLEFBQWhDLElBQWdDO1FBRWhDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQTtJQUMvQixDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBcEVELElBb0VDO0FBcEVZLGdDQUF3QiwyQkFvRXBDLENBQUEifQ==