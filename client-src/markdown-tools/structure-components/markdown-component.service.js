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
var table_of_contents_component_1 = require('./table-of-contents.component');
var MarkdownComponentService = (function () {
    function MarkdownComponentService() {
    }
    MarkdownComponentService.prototype.buildComponent = function (_a) {
        var template = _a.template, styles = _a.styles;
        var tocTemplate = "\n      <table-of-contents\n        *ngIf=\"pageElements\"\n        [pageElements]=\"pageElements\">\n      </table-of-contents>\n    ";
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
                    template: tocTemplate + template,
                    styles: styles,
                    directives: [
                        h1_directive_1.H1Directive, h2_directive_1.H2Directive, h3_directive_1.H3Directive, h4_directive_1.H4Directive, h5_directive_1.H5Directive,
                        table_of_contents_component_1.TableOfContentsComponent
                    ]
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef])
            ], DynamicComponent);
            return DynamicComponent;
        }());
        return DynamicComponent;
    };
    return MarkdownComponentService;
}());
exports.MarkdownComponentService = MarkdownComponentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tY29tcG9uZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXJrZG93bi1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7Ozs7Ozs7Ozs7O0FBRUgscUJBQStELGVBQy9ELENBQUMsQ0FENkU7QUFDOUUsNkJBQTRCLGdCQUM1QixDQUFDLENBRDJDO0FBQzVDLDZCQUE0QixnQkFDNUIsQ0FBQyxDQUQyQztBQUM1Qyw2QkFBNEIsZ0JBQzVCLENBQUMsQ0FEMkM7QUFDNUMsNkJBQTRCLGdCQUM1QixDQUFDLENBRDJDO0FBQzVDLDZCQUE0QixnQkFDNUIsQ0FBQyxDQUQyQztBQUM1Qyw0Q0FBeUMsK0JBRXpDLENBQUMsQ0FGdUU7QUFFeEU7SUFBQTtJQXlEQSxDQUFDO0lBdkRRLGlEQUFjLEdBQXJCLFVBQXVCLEVBQWtCO1lBQWpCLHNCQUFRLEVBQUUsa0JBQU07UUFFdEMsSUFBSSxXQUFXLEdBQUcsd0lBS2pCLENBQUE7UUFXRDtZQVNFLDBCQUFvQixVQUFzQjtnQkFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtZQUFHLENBQUM7WUFFdkMsMENBQWUsR0FBdEI7Z0JBQ0Usd0NBQXdDO2dCQUN4QyxxQkFBcUI7Z0JBQ3JCLHVCQUF1QjtnQkFDdkIsUUFBUTtZQUNWLENBQUM7WUFFTSxzQ0FBVyxHQUFsQjtnQkFDRSxJQUFJLGlCQUFpQixHQUFHO29CQUN0QixFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQy9CLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtvQkFDL0IsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO29CQUMvQixFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQy9CLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtpQkFDaEMsQ0FBQTtnQkFFRCxtRUFBbUU7Z0JBQ25FLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO3FCQUMzRCxhQUFhO3FCQUNiLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7cUJBQ3ZDLEdBQUcsQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQS9DLENBQStDLENBQUMsQ0FBQTtZQUN0RSxDQUFDO1lBL0JEO2dCQUFDLG1CQUFZLENBQUMsMEJBQVcsQ0FBQzs7a0VBQUE7WUFDMUI7Z0JBQUMsbUJBQVksQ0FBQywwQkFBVyxDQUFDOztrRUFBQTtZQUMxQjtnQkFBQyxtQkFBWSxDQUFDLDBCQUFXLENBQUM7O2tFQUFBO1lBQzFCO2dCQUFDLG1CQUFZLENBQUMsMEJBQVcsQ0FBQzs7a0VBQUE7WUFDMUI7Z0JBQUMsbUJBQVksQ0FBQywwQkFBVyxDQUFDOztrRUFBQTtZQWQ1QjtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLFFBQVEsRUFBRSxXQUFXLEdBQUcsUUFBUTtvQkFDaEMsUUFBQSxNQUFNO29CQUNOLFVBQVUsRUFBRTt3QkFDViwwQkFBVyxFQUFFLDBCQUFXLEVBQUUsMEJBQVcsRUFBRSwwQkFBVyxFQUFFLDBCQUFXO3dCQUMvRCxzREFBd0I7cUJBQ3pCO2lCQUNGLENBQUM7O2dDQUFBO1lBa0NGLHVCQUFDO1FBQUQsQ0FBQyxBQWpDRCxJQWlDQztRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQTtJQUN6QixDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBekRELElBeURDO0FBekRZLGdDQUF3QiwyQkF5RHBDLENBQUEifQ==