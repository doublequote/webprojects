import { Component, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'newAd',
  templateUrl: './app/ad/newAd.html'
})
export class NewAdComponent {

  constructor (private http: Http, private headers: Headers) {
  }

  add(): void {
    var observable = this.http.get("http://localhost:5001/api/add-ad");

    observable.subscribe(data => console.log(data),
                          error =>  console.error(error));
  }

}
