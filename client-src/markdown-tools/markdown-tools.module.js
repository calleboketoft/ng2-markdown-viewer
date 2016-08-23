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
var dynamic_markdown_component_1 = require('./dynamic-markdown.component');
var markdown_component_service_1 = require('./structure-components/markdown-component.service');
var MarkdownToolsModule = (function () {
    function MarkdownToolsModule() {
    }
    MarkdownToolsModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            providers: [compiler_1.COMPILER_PROVIDERS, markdown_component_service_1.MarkdownComponentService],
            declarations: [dynamic_markdown_component_1.DynamicMarkdownComponent],
            exports: [dynamic_markdown_component_1.DynamicMarkdownComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MarkdownToolsModule);
    return MarkdownToolsModule;
}());
exports.MarkdownToolsModule = MarkdownToolsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tdG9vbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFya2Rvd24tdG9vbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFDekIsQ0FBQyxDQUR1QztBQUN4Qyx5QkFBbUMsbUJBQ25DLENBQUMsQ0FEcUQ7QUFDdEQsaUNBQThCLDJCQUM5QixDQUFDLENBRHdEO0FBQ3pELDJDQUF5Qyw4QkFDekMsQ0FBQyxDQURzRTtBQUN2RSwyQ0FBeUMsbURBRXpDLENBQUMsQ0FGMkY7QUFRNUY7SUFBQTtJQUFtQyxDQUFDO0lBTnBDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsZ0NBQWEsQ0FBQztZQUN4QixTQUFTLEVBQUUsQ0FBQyw2QkFBa0IsRUFBRSxxREFBd0IsQ0FBQztZQUN6RCxZQUFZLEVBQUUsQ0FBQyxxREFBd0IsQ0FBQztZQUN4QyxPQUFPLEVBQUUsQ0FBQyxxREFBd0IsQ0FBQztTQUNwQyxDQUFDOzsyQkFBQTtJQUNpQywwQkFBQztBQUFELENBQUMsQUFBcEMsSUFBb0M7QUFBdkIsMkJBQW1CLHNCQUFJLENBQUEifQ==