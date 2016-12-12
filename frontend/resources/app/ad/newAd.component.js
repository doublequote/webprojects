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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var Ad_1 = require("./Ad");
var NewAdComponent = (function () {
    function NewAdComponent(http, router) {
        this.http = http;
        this.router = router;
        this.ad = new Ad_1.Ad();
    }
    NewAdComponent.prototype.ngAfterViewInit = function () {
        $('.ui.calendar').calendar({ type: 'date' });
    };
    NewAdComponent.prototype.add = function () {
        var _this = this;
        var observable = this.http.post("http://localhost:5001/api/add-ad", this.ad);
        observable.subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['ad', data._body]);
        }, function (error) {
            console.error(error);
        });
    };
    return NewAdComponent;
}());
NewAdComponent = __decorate([
    core_1.Component({
        selector: 'newAd',
        templateUrl: './app/ad/newAd.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], NewAdComponent);
exports.NewAdComponent = NewAdComponent;
//# sourceMappingURL=newAd.component.js.map