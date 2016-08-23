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
        // TODO give the possibility to provide a custom table of contents
        // template
        var tocTemplate = "\n      <table-of-contents\n        *ngIf=\"pageElements\"\n        [pageElements]=\"pageElements\">\n      </table-of-contents>\n    ";
        var DynamicComponent = (function () {
            function DynamicComponent(elementRef) {
                this.elementRef = elementRef;
                this.pageElements = [];
            }
            DynamicComponent.prototype.ngAfterViewInit = function () {
                var headingDirectives = {
                    h1: this.h1Directives.toArray(),
                    h2: this.h2Directives.toArray(),
                    h3: this.h3Directives.toArray(),
                    h4: this.h4Directives.toArray(),
                    h5: this.h5Directives.toArray()
                };
                (_a = this.pageElements).push.apply(_a, Array.prototype.slice.call(this.elementRef
                    .nativeElement
                    .querySelectorAll('h1, h2, h3, h4, h5'))
                    .map(function (headingEl) { return headingDirectives[headingEl.localName].shift(0); }));
                var _a;
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
                    selector: 'dynamic-component-spawn',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tY29tcG9uZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXJrZG93bi1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7Ozs7Ozs7Ozs7O0FBRUgscUJBQStELGVBQy9ELENBQUMsQ0FENkU7QUFDOUUsNkJBQTRCLGdCQUM1QixDQUFDLENBRDJDO0FBQzVDLDZCQUE0QixnQkFDNUIsQ0FBQyxDQUQyQztBQUM1Qyw2QkFBNEIsZ0JBQzVCLENBQUMsQ0FEMkM7QUFDNUMsNkJBQTRCLGdCQUM1QixDQUFDLENBRDJDO0FBQzVDLDZCQUE0QixnQkFDNUIsQ0FBQyxDQUQyQztBQUM1Qyw0Q0FBeUMsK0JBRXpDLENBQUMsQ0FGdUU7QUFFeEU7SUFBQTtJQW1EQSxDQUFDO0lBakRRLGlEQUFjLEdBQXJCLFVBQXVCLEVBQWtCO1lBQWpCLHNCQUFRLEVBQUUsa0JBQU07UUFFdEMsa0VBQWtFO1FBQ2xFLFdBQVc7UUFDWCxJQUFJLFdBQVcsR0FBRyx3SUFLakIsQ0FBQTtRQVdEO1lBU0UsMEJBQW9CLFVBQXNCO2dCQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO2dCQUZuQyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztZQUVvQixDQUFDO1lBRTlDLDBDQUFlLEdBQWY7Z0JBQ0UsSUFBSSxpQkFBaUIsR0FBRztvQkFDdEIsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO29CQUMvQixFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQy9CLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtvQkFDL0IsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO29CQUMvQixFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7aUJBQ2hDLENBQUE7Z0JBRUQsTUFBQSxJQUFJLENBQUMsWUFBWSxFQUFDLElBQUksV0FBSSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7cUJBQ2pFLGFBQWE7cUJBQ2IsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztxQkFDdkMsR0FBRyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxDQUFDLENBQUE7O1lBQ3ZFLENBQUM7WUF2QkQ7Z0JBQUMsbUJBQVksQ0FBQywwQkFBVyxDQUFDOztrRUFBQTtZQUMxQjtnQkFBQyxtQkFBWSxDQUFDLDBCQUFXLENBQUM7O2tFQUFBO1lBQzFCO2dCQUFDLG1CQUFZLENBQUMsMEJBQVcsQ0FBQzs7a0VBQUE7WUFDMUI7Z0JBQUMsbUJBQVksQ0FBQywwQkFBVyxDQUFDOztrRUFBQTtZQUMxQjtnQkFBQyxtQkFBWSxDQUFDLDBCQUFXLENBQUM7O2tFQUFBO1lBZDVCO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLFdBQVcsR0FBRyxRQUFRO29CQUNoQyxRQUFBLE1BQU07b0JBQ04sVUFBVSxFQUFFO3dCQUNWLDBCQUFXLEVBQUUsMEJBQVcsRUFBRSwwQkFBVyxFQUFFLDBCQUFXLEVBQUUsMEJBQVc7d0JBQy9ELHNEQUF3QjtxQkFDekI7aUJBQ0YsQ0FBQzs7Z0NBQUE7WUEwQkYsdUJBQUM7UUFBRCxDQUFDLEFBekJELElBeUJDO1FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFBO0lBQ3pCLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFuREQsSUFtREM7QUFuRFksZ0NBQXdCLDJCQW1EcEMsQ0FBQSJ9