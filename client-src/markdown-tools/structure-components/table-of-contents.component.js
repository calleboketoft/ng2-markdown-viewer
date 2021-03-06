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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TableOfContentsComponent = (function () {
    function TableOfContentsComponent() {
    }
    return TableOfContentsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TableOfContentsComponent.prototype, "pageElements", void 0);
TableOfContentsComponent = __decorate([
    core_1.Component({
        selector: 'table-of-contents',
        template: "\n    <ul>\n      <li *ngFor=\"let heading of pageElements\">\n        {{ heading.elementRef.nativeElement.innerHTML }}\n      </li>\n    </ul>\n  "
    })
], TableOfContentsComponent);
exports.TableOfContentsComponent = TableOfContentsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtb2YtY29udGVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFibGUtb2YtY29udGVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWdEO0FBWWhELElBQWEsd0JBQXdCO0lBQXJDO0lBRUEsQ0FBQztJQUFELCtCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFEVTtJQUFSLFlBQUssRUFBRTs7OERBQWE7QUFEVix3QkFBd0I7SUFWcEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsUUFBUSxFQUFFLHFKQU1UO0tBQ0YsQ0FBQztHQUNXLHdCQUF3QixDQUVwQztBQUZZLDREQUF3QiJ9