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
var H5Directive = (function () {
    function H5Directive() {
    }
    H5Directive.prototype.onClick = function () {
        console.log('this is a h5 directive');
    };
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], H5Directive.prototype, "onClick", null);
    H5Directive = __decorate([
        core_1.Directive({ selector: 'h5' }), 
        __metadata('design:paramtypes', [])
    ], H5Directive);
    return H5Directive;
}());
exports.H5Directive = H5Directive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaDUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaDUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0MsZUFFeEMsQ0FBQyxDQUZzRDtBQUd2RDtJQUFBO0lBSUEsQ0FBQztJQUh3Qiw2QkFBTyxHQUFQO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRkQ7UUFBQyxtQkFBWSxDQUFDLE9BQU8sQ0FBQzs7Ozs4Q0FBQTtJQUZ4QjtRQUFDLGdCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O21CQUFBO0lBSzlCLGtCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxtQkFBVyxjQUl2QixDQUFBIn0=