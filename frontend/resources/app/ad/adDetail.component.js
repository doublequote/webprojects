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
var AdDetailComponent = (function () {
    function AdDetailComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.ad = new Ad_1.Ad();
    }
    AdDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    AdDetailComponent.prototype.load = function (id) {
        var _this = this;
        var observable = this.http.get("http://localhost:5001/api/ad/" + id);
        observable.subscribe(function (data) {
            _this.ad = JSON.parse(data._body);
            console.log(_this.ad);
        }, function (error) {
            console.error(error);
        });
    };
    return AdDetailComponent;
}());
AdDetailComponent = __decorate([
    core_1.Component({
        selector: 'adDetail',
        templateUrl: './app/ad/adDetail.html'
    }),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.ActivatedRoute,
        router_1.Router])
], AdDetailComponent);
exports.AdDetailComponent = AdDetailComponent;
//# sourceMappingURL=adDetail.component.js.map