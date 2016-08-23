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
        this.markdownTextInput = new forms_1.FormControl('# hello there');
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
            _this.renderMarkdown(mdText);
        });
    };
    AppComponent.prototype.renderFromTextarea = function () {
        this.renderMarkdown(this.markdownTextInput.value);
    };
    AppComponent.prototype.renderMarkdown = function (mdText) {
        this.markdownHtml = markdownService.getCleanHtmlTextFromMarkdown(mdText);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <div class=\"container\">\n      <h2>Commonmark Example</h2>\n      <div class=\"row\">\n        <div class=\"col-xs-4\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Markdown URL\"\n            [formControl]=\"markdownUrlInput\">\n        </div>\n        <div class=\"col-xs-2\" style=\"text-align: right;\">\n          <button type=\"button\" class=\"btn btn-primary\"\n            (click)=\"fetchAndRender()\">\n            Render from URL\n          </button>\n        </div>\n        <div class=\"col-xs-4\">\n          <textarea class=\"form-control\"\n            [formControl]=\"markdownTextInput\" placeholder=\"Markdown Text\"></textarea>\n        </div>\n        <div class=\"col-xs-2\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"renderFromTextarea()\">\n            Render from text\n          </button>\n        </div>\n      </div>\n      <hr>\n      <dynamic-markdown\n        *ngIf=\"markdownHtml\"\n        [template]=\"markdownHtml\"\n        [styles]=\"[markdownStyles]\">\n      </dynamic-markdown>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLHFCQUFpRCxlQUNqRCxDQUFDLENBRCtEO0FBQ2hFLHNCQUE0QixnQkFFNUIsQ0FBQyxDQUYyQztBQUU1QyxJQUFZLGVBQWUsV0FBTSxvQ0FDakMsQ0FBQyxDQURvRTtBQUNyRSxnQ0FBK0IsbUJBRS9CLENBQUMsQ0FGaUQ7QUFxQ2xEO0lBQUE7UUFFUyxxQkFBZ0IsR0FBRyxJQUFJLG1CQUFXLENBQUMsZ0hBQWdILENBQUMsQ0FBQztRQUNySixzQkFBaUIsR0FBRyxJQUFJLG1CQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFHckQsbUJBQWMsR0FBRyxnQ0FBYyxDQUFDO0lBd0J6QyxDQUFDO0lBdEJRLHdDQUFpQixHQUF4QixVQUEwQixHQUFHO1FBQzNCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ2QsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN2QixJQUFJLENBQUMsVUFBQSxPQUFPO1lBQ1gsTUFBTSxDQUFDLE9BQU8sQ0FBQTtRQUNoQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxxQ0FBYyxHQUFyQjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDaEQsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNYLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0seUNBQWtCLEdBQXpCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVNLHFDQUFjLEdBQXJCLFVBQXVCLE1BQU07UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDMUUsQ0FBQztJQWhFSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSx1a0NBK0JUO1NBQ0YsQ0FBQzs7b0JBQUE7SUErQkYsbUJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBOUJZLG9CQUFZLGVBOEJ4QixDQUFBIn0=