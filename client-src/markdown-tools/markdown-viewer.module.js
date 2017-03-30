"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var compiler_1 = require("@angular/compiler");
var platform_browser_1 = require("@angular/platform-browser");
var markdown_viewer_component_1 = require("./markdown-viewer.component");
var markdown_component_service_1 = require("./structure-components/markdown-component.service");
var h1_directive_1 = require("./structure-components/h1.directive");
var h2_directive_1 = require("./structure-components/h2.directive");
var h3_directive_1 = require("./structure-components/h3.directive");
var h4_directive_1 = require("./structure-components/h4.directive");
var h5_directive_1 = require("./structure-components/h5.directive");
var table_of_contents_component_1 = require("./structure-components/table-of-contents.component");
var MarkdownViewerModule = (function () {
    function MarkdownViewerModule() {
    }
    return MarkdownViewerModule;
}());
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
    })
], MarkdownViewerModule);
exports.MarkdownViewerModule = MarkdownViewerModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tdmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcmtkb3duLXZpZXdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBd0M7QUFDeEMsOENBQXNEO0FBQ3RELDhEQUF5RDtBQUN6RCx5RUFBcUU7QUFDckUsZ0dBQTRGO0FBQzVGLG9FQUFpRTtBQUNqRSxvRUFBaUU7QUFDakUsb0VBQWlFO0FBQ2pFLG9FQUFpRTtBQUNqRSxvRUFBaUU7QUFDakUsa0dBQTZGO0FBcUI3RixJQUFhLG9CQUFvQjtJQUFqQztJQUFvQyxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQUFDLEFBQXJDLElBQXFDO0FBQXhCLG9CQUFvQjtJQW5CaEMsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsZ0NBQWEsQ0FBQztRQUN4QixTQUFTLEVBQUU7WUFDVCw2QkFBa0I7WUFDbEIscURBQXdCO1NBQ3pCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osbURBQXVCO1lBQ3ZCLDBCQUFXO1lBQ1gsMEJBQVc7WUFDWCwwQkFBVztZQUNYLDBCQUFXO1lBQ1gsMEJBQVc7WUFDWCxzREFBd0I7U0FDekI7UUFDRCxPQUFPLEVBQUU7WUFDUCxtREFBdUI7U0FDeEI7S0FDRixDQUFDO0dBQ1csb0JBQW9CLENBQUk7QUFBeEIsb0RBQW9CIn0=