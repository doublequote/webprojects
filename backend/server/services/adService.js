"use strict";
var couchbase = require("couchbase");
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('default');
var AdService = (function () {
    function AdService() {
    }
    AdService.prototype.insertAd = function (ad) {
        return new Promise(function (resolve, reject) {
            var id = 'ad_' + new Date().getTime();
            bucket.upsert(id, ad, function (err, result) {
                if (err) {
                    reject("ad insertion failed" + ad);
                }
                else {
                    resolve(id);
                }
            });
        });
    };
    AdService.prototype.getAd = function (adId) {
        return new Promise(function (resolve, reject) {
            bucket.get(adId, function (err, result) {
                if (err) {
                    console.log(err);
                    reject("ad get failed" + adId);
                }
                else {
                    console.log(result.value);
                    resolve(result.value);
                }
            });
        });
    };
    return AdService;
}());
exports.AdService = AdService;
//# sourceMappingURL=adService.js.map