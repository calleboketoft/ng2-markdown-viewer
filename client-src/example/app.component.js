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
var forms_1 = require('@angular/forms');
var markdownService = require('../markdown-tools/markdown.service');
var markdown_styles_1 = require('./markdown-styles');
var AppComponent = (function () {
    function AppComponent() {
        this.markdownUrlInput = new forms_1.FormControl('https://raw.githubusercontent.com/calleboketoft/co-quick-start-guides/master/angular2-module-for-publishing.md');
        this.markdownTextInput = new forms_1.FormControl("# Example\n## With headings\n### Of different\n## Sizes\n### To try\n#### ToC creation\n# the\n## End");
        this.markdownStyles = markdown_styles_1.markdownStyles;
    }
    AppComponent.prototype.fetchMarkdownText = function (url) {
        return fetch(url)
            .then(function (res) { return res.text(); })
            .then(function (resText) {
            return resText;
        });
    };
    AppComponent.prototype.fetchAndRender = function () {
        var _this = this;
        this.fetchMarkdownText(this.markdownUrlInput.value)
            .then(function (mdText) {
            _this.applyMarkdownHtml(mdText);
        });
    };
    AppComponent.prototype.renderFromTextareaHtml = function () {
        this.applyMarkdownHtml(this.markdownTextInput.value);
    };
    AppComponent.prototype.renderFromTextareaText = function () {
        this.applyMarkdownText(this.markdownTextInput.value);
    };
    AppComponent.prototype.applyMarkdownHtml = function (mdText) {
        this.markdownHtml = markdownService.getCleanHtmlTextFromMarkdown(mdText);
    };
    AppComponent.prototype.applyMarkdownText = function (mdText) {
        this.markdownText = mdText;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <div class=\"container\">\n      <h2>Commonmark Example</h2>\n      <div class=\"row\">\n        <div class=\"col-xs-4\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Markdown URL\"\n            [formControl]=\"markdownUrlInput\">\n        </div>\n        <div class=\"col-xs-2\" style=\"text-align: right;\">\n          <button type=\"button\" class=\"btn btn-primary\"\n            (click)=\"fetchAndRender()\">\n            Render from URL\n          </button>\n        </div>\n        <div class=\"col-xs-4\">\n          <textarea class=\"form-control\"\n            [formControl]=\"markdownTextInput\" placeholder=\"Markdown Text\"></textarea>\n        </div>\n        <div class=\"col-xs-2\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"renderFromTextareaHtml()\">\n            Render as HTML\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"renderFromTextareaText()\">\n            Render as Text\n          </button>\n        </div>\n      </div>\n      <hr>\n      <markdown-viewer\n        *ngIf=\"markdownHtml || markdownText\"\n        [template]=\"markdownHtml\"\n        [markdown]=\"markdownText\"\n        [styles]=\"[markdownStyles]\">\n      </markdown-viewer>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLHFCQUFpRCxlQUNqRCxDQUFDLENBRCtEO0FBQ2hFLHNCQUE0QixnQkFFNUIsQ0FBQyxDQUYyQztBQUU1QyxJQUFZLGVBQWUsV0FBTSxvQ0FDakMsQ0FBQyxDQURvRTtBQUNyRSxnQ0FBK0IsbUJBRS9CLENBQUMsQ0FGaUQ7QUF5Q2xEO0lBQUE7UUFFUyxxQkFBZ0IsR0FBRyxJQUFJLG1CQUFXLENBQUMsZ0hBQWdILENBQUMsQ0FBQztRQUNySixzQkFBaUIsR0FBRyxJQUFJLG1CQUFXLENBQUMsdUdBT3RDLENBQUMsQ0FBQztRQUlBLG1CQUFjLEdBQUcsZ0NBQWMsQ0FBQztJQWdDekMsQ0FBQztJQTlCUSx3Q0FBaUIsR0FBeEIsVUFBMEIsR0FBRztRQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNkLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdkIsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUNYLE1BQU0sQ0FBQyxPQUFPLENBQUE7UUFDaEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0scUNBQWMsR0FBckI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2hELElBQUksQ0FBQyxVQUFDLE1BQU07WUFDWCxLQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sNkNBQXNCLEdBQTdCO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0RCxDQUFDO0lBRU0sNkNBQXNCLEdBQTdCO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0RCxDQUFDO0lBRU0sd0NBQWlCLEdBQXhCLFVBQTBCLE1BQU07UUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDMUUsQ0FBQztJQUVNLHdDQUFpQixHQUF4QixVQUEwQixNQUFNO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFBO0lBQzVCLENBQUM7SUFwRkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsZ3hDQW1DVDtTQUNGLENBQUM7O29CQUFBO0lBK0NGLG1CQUFDO0FBQUQsQ0FBQyxBQTlDRCxJQThDQztBQTlDWSxvQkFBWSxlQThDeEIsQ0FBQSJ9