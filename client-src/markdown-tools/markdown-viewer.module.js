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
var platform_browser_1 = require('@angular/platform-browser');
var markdown_viewer_component_1 = require('./markdown-viewer.component');
var markdown_component_service_1 = require('./structure-components/markdown-component.service');
var h1_directive_1 = require('./structure-components/h1.directive');
var h2_directive_1 = require('./structure-components/h2.directive');
var h3_directive_1 = require('./structure-components/h3.directive');
var h4_directive_1 = require('./structure-components/h4.directive');
var h5_directive_1 = require('./structure-components/h5.directive');
var table_of_contents_component_1 = require('./structure-components/table-of-contents.component');
var MarkdownViewerModule = (function () {
    function MarkdownViewerModule() {
    }
    MarkdownViewerModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            providers: [
                compiler_1.COMPILER_PROVIDERS,
                markdown_component_service_1.MarkdownComponentService
            ],
            declarations: [
                markdown_viewer_component_1.MarkdownViewerComponent,
                h1_directive_1.H1Directive,
                h2_directive_1.H2Directive,
                h3_directive_1.H3Directive,
                h4_directive_1.H4Directive,
                h5_directive_1.H5Directive,
                table_of_contents_component_1.TableOfContentsComponent
            ],
            exports: [
                markdown_viewer_component_1.MarkdownViewerComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MarkdownViewerModule);
    return MarkdownViewerModule;
}());
exports.MarkdownViewerModule = MarkdownViewerModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tdmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcmtkb3duLXZpZXdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUN6QixDQUFDLENBRHVDO0FBQ3hDLHlCQUFtQyxtQkFDbkMsQ0FBQyxDQURxRDtBQUN0RCxpQ0FBOEIsMkJBQzlCLENBQUMsQ0FEd0Q7QUFDekQsMENBQXdDLDZCQUN4QyxDQUFDLENBRG9FO0FBQ3JFLDJDQUF5QyxtREFDekMsQ0FBQyxDQUQyRjtBQUM1Riw2QkFBNEIscUNBQzVCLENBQUMsQ0FEZ0U7QUFDakUsNkJBQTRCLHFDQUM1QixDQUFDLENBRGdFO0FBQ2pFLDZCQUE0QixxQ0FDNUIsQ0FBQyxDQURnRTtBQUNqRSw2QkFBNEIscUNBQzVCLENBQUMsQ0FEZ0U7QUFDakUsNkJBQTRCLHFDQUM1QixDQUFDLENBRGdFO0FBQ2pFLDRDQUF5QyxvREFFekMsQ0FBQyxDQUY0RjtBQXFCN0Y7SUFBQTtJQUFvQyxDQUFDO0lBbkJyQztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGdDQUFhLENBQUM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULDZCQUFrQjtnQkFDbEIscURBQXdCO2FBQ3pCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLG1EQUF1QjtnQkFDdkIsMEJBQVc7Z0JBQ1gsMEJBQVc7Z0JBQ1gsMEJBQVc7Z0JBQ1gsMEJBQVc7Z0JBQ1gsMEJBQVc7Z0JBQ1gsc0RBQXdCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG1EQUF1QjthQUN4QjtTQUNGLENBQUM7OzRCQUFBO0lBQ2tDLDJCQUFDO0FBQUQsQ0FBQyxBQUFyQyxJQUFxQztBQUF4Qiw0QkFBb0IsdUJBQUksQ0FBQSJ9