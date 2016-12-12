import { Component, Input, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Ad } from './Ad';

@Component({
  selector: 'adDetail',
  templateUrl: './app/ad/adDetail.html'
})
export class AdDetailComponent implements OnInit {

  public as: Ad;

  constructor (private http: Http,
    private route: ActivatedRoute,
    private router: Router) {
      this.ad = new Ad();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.load(params['id']);
    });
  }

  load(id): void {
    var observable = this.http.get("http://localhost:5001/api/ad/" + id);

    observable.subscribe(data => {
                            this.ad = JSON.parse(data._body);
                            console.log(this.ad);
                          },
                          error =>  {
                            console.error(error);
                          });
  }

}
