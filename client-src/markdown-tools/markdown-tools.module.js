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
var dynamic_markdown_component_1 = require('./dynamic-markdown.component');
var MarkdownToolsModule = (function () {
    function MarkdownToolsModule() {
    }
    MarkdownToolsModule = __decorate([
        core_1.NgModule({
            providers: [compiler_1.COMPILER_PROVIDERS],
            declarations: [dynamic_markdown_component_1.DynamicMarkdownComponent],
            exports: [dynamic_markdown_component_1.DynamicMarkdownComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MarkdownToolsModule);
    return MarkdownToolsModule;
}());
exports.MarkdownToolsModule = MarkdownToolsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tdG9vbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFya2Rvd24tdG9vbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFDekIsQ0FBQyxDQUR1QztBQUN4Qyx5QkFBbUMsbUJBQ25DLENBQUMsQ0FEcUQ7QUFDdEQsMkNBQXlDLDhCQUV6QyxDQUFDLENBRnNFO0FBT3ZFO0lBQUE7SUFBbUMsQ0FBQztJQUxwQztRQUFDLGVBQVEsQ0FBQztZQUNSLFNBQVMsRUFBRSxDQUFDLDZCQUFrQixDQUFDO1lBQy9CLFlBQVksRUFBRSxDQUFDLHFEQUF3QixDQUFDO1lBQ3hDLE9BQU8sRUFBRSxDQUFDLHFEQUF3QixDQUFDO1NBQ3BDLENBQUM7OzJCQUFBO0lBQ2lDLDBCQUFDO0FBQUQsQ0FBQyxBQUFwQyxJQUFvQztBQUF2QiwyQkFBbUIsc0JBQUksQ0FBQSJ9