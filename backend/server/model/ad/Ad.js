"use strict";
var Ad = (function () {
    function Ad() {
        this.participants = new Array();
        this.shipping = new Shipping();
        this.products = new Array();
    }
    return Ad;
}());
exports.Ad = Ad;
var Shipping = (function () {
    function Shipping() {
    }
    return Shipping;
}());
exports.Shipping = Shipping;
//# sourceMappingURL=Ad.js.map