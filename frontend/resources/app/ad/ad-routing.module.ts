import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewAdComponent }  from './newAd.component';
import { AdDetailComponent }  from './adDetail.component';

const adRoutes: Routes = [
  { path: 'add', component: NewAdComponent },
  { path: 'ad/:id', component: AdDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(adRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
