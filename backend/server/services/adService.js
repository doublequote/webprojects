"use strict";
var couchbase = require("couchbase");
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('default');
var AdService = (function () {
    function AdService() {
    }
    AdService.prototype.insertAd = function (ad) {
        return new Promise(function (resolve, reject) {
            bucket.upsert('ad_' + new Date().getTime(), ad, function (err, result) {
                if (err) {
                    reject("ad insertion failed" + ad);
                }
                else {
                    resolve("ad insertion ok " + ad);
                }
            });
        });
    };
    AdService.prototype.getAd = function (adId) {
        return new Promise(function (resolve, reject) {
            bucket.get(adId, function (err, result) {
                if (err) {
                    reject("ad get failed" + adId);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    return AdService;
}());
exports.AdService = AdService;
//# sourceMappingURL=adService.js.map