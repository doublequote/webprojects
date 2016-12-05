///<reference path="../typings/index.d.ts"/>
import couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('default');
import {Ad} from '../model/ad/Ad';

export class AdService {

  constructor() { }

  insertAd(ad: Ad): Promise<String> {
    return new Promise((resolve, reject) => {
      bucket.upsert('ad_' + new Date().getTime(), ad, function(err, result) {
        if (err) {
          reject("ad insertion failed" + ad);
        }
        else {
          resolve("ad insertion ok " + ad);
        }
      });
    });
  }

  getAd(adId: String): Promise<Ad> {
    return new Promise((resolve, reject) => {
      bucket.get(adId, function(err, result) {
        if (err) {
          reject("ad get failed" + adId);
        }
        else {
          resolve(result);
        }
      });
    });
  }

}
