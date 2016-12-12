import { Component, Input, AfterViewInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Ad } from './Ad';

@Component({
  selector: 'newAd',
  templateUrl: './app/ad/newAd.html'
})
export class NewAdComponent implements AfterViewInit {

  constructor (private http: Http, private router: Router) {
    this.ad = new Ad();
  }

  ngAfterViewInit() {
    $('.ui.calendar').calendar({type: 'date'});
  }

  add(): void {
    var observable = this.http.post("http://localhost:5001/api/add-ad", this.ad);

    observable.subscribe(data => {
                            console.log(data);
                            this.router.navigate(['ad', data._body]);
                          },
                          error =>  {
                            console.error(error);
                          });
  }

}
