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
var MarkdownComponentService = (function () {
    function MarkdownComponentService() {
    }
    MarkdownComponentService.prototype.buildComponent = function (_a) {
        var template = _a.template, styles = _a.styles;
        var DynamicComponent = (function () {
            function DynamicComponent() {
            }
            DynamicComponent.prototype.getHeadings = function () {
                console.log(this.h1Directives);
                console.log(this.h2Directives);
            };
            __decorate([
                core_1.ViewChildren(h1_directive_1.H1Directive), 
                __metadata('design:type', Object)
            ], DynamicComponent.prototype, "h1Directives", void 0);
            __decorate([
                core_1.ViewChildren(h2_directive_1.H2Directive), 
                __metadata('design:type', Object)
            ], DynamicComponent.prototype, "h2Directives", void 0);
            DynamicComponent = __decorate([
                core_1.Component({
                    selector: 'dynamic-component-spawn',
                    template: template + "\n        <button (click)=\"getHeadings()\">\n          Get Headings\n        </button>\n      ",
                    styles: styles,
                    directives: [
                        h1_directive_1.H1Directive,
                        h2_directive_1.H2Directive
                    ]
                }), 
                __metadata('design:paramtypes', [])
            ], DynamicComponent);
            return DynamicComponent;
        }());
        return DynamicComponent;
    };
    return MarkdownComponentService;
}());
exports.MarkdownComponentService = MarkdownComponentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tY29tcG9uZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXJrZG93bi1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdDLGVBQ3hDLENBQUMsQ0FEc0Q7QUFDdkQsNkJBQTRCLGdCQUM1QixDQUFDLENBRDJDO0FBQzVDLDZCQUE0QixnQkFFNUIsQ0FBQyxDQUYyQztBQUU1QztJQUFBO0lBMkJBLENBQUM7SUF6QlEsaURBQWMsR0FBckIsVUFBdUIsRUFBa0I7WUFBakIsc0JBQVEsRUFBRSxrQkFBTTtRQWN0QztZQUFBO1lBT0EsQ0FBQztZQUpRLHNDQUFXLEdBQWxCO2dCQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO2dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUNoQyxDQUFDO1lBTEQ7Z0JBQUMsbUJBQVksQ0FBQywwQkFBVyxDQUFDOztrRUFBQTtZQUMxQjtnQkFBQyxtQkFBWSxDQUFDLDBCQUFXLENBQUM7O2tFQUFBO1lBZjVCO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLFFBQVEsR0FBRyxpR0FJcEI7b0JBQ0QsUUFBQSxNQUFNO29CQUNOLFVBQVUsRUFBRTt3QkFDViwwQkFBVzt3QkFDWCwwQkFBVztxQkFDWjtpQkFDRixDQUFDOztnQ0FBQTtZQVFGLHVCQUFDO1FBQUQsQ0FBQyxBQVBELElBT0M7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUE7SUFDekIsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQztBQTNCWSxnQ0FBd0IsMkJBMkJwQyxDQUFBIn0=