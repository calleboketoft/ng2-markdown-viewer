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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var markdown_tools_module_1 = require('../markdown-tools/markdown-tools.module');
var app_component_1 = require('./app.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, markdown_tools_module_1.MarkdownToolsModule],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUN6QixDQUFDLENBRHVDO0FBQ3hDLGlDQUE4QiwyQkFDOUIsQ0FBQyxDQUR3RDtBQUN6RCxzQkFBb0MsZ0JBRXBDLENBQUMsQ0FGbUQ7QUFFcEQsc0NBQW9DLHlDQUNwQyxDQUFDLENBRDRFO0FBQzdFLDhCQUE2QixpQkFFN0IsQ0FBQyxDQUY2QztBQU85QztJQUFBO0lBQXlCLENBQUM7SUFMMUI7UUFBQyxlQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQzVCLE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUUsMkJBQW1CLEVBQUUsMkNBQW1CLENBQUM7WUFDbEUsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDOztpQkFBQTtJQUN1QixnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixpQkFBUyxZQUFJLENBQUEifQ==