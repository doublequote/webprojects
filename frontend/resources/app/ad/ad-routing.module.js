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
var router_1 = require("@angular/router");
var newAd_component_1 = require("./newAd.component");
var adDetail_component_1 = require("./adDetail.component");
var adRoutes = [
    { path: 'add', component: newAd_component_1.NewAdComponent },
    { path: 'ad/:id', component: adDetail_component_1.AdDetailComponent }
];
var AdRoutingModule = (function () {
    function AdRoutingModule() {
    }
    return AdRoutingModule;
}());
AdRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(adRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    }),
    __metadata("design:paramtypes", [])
], AdRoutingModule);
exports.AdRoutingModule = AdRoutingModule;
//# sourceMappingURL=ad-routing.module.js.map