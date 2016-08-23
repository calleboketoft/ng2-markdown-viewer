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
var H1Directive = (function () {
    function H1Directive(elementRef) {
        this.elementRef = elementRef;
    }
    H1Directive.prototype.onClick = function () {
        console.log('this is a h1 directive');
    };
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], H1Directive.prototype, "onClick", null);
    H1Directive = __decorate([
        core_1.Directive({ selector: 'h1' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], H1Directive);
    return H1Directive;
}());
exports.H1Directive = H1Directive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaDEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaDEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0QsZUFFcEQsQ0FBQyxDQUZrRTtBQUduRTtJQUtFLHFCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQztJQUp4Qiw2QkFBTyxHQUFQO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRkQ7UUFBQyxtQkFBWSxDQUFDLE9BQU8sQ0FBQzs7Ozs4Q0FBQTtJQUZ4QjtRQUFDLGdCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O21CQUFBO0lBTzlCLGtCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSxtQkFBVyxjQU12QixDQUFBIn0=