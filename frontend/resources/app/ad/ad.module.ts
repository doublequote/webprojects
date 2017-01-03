import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { NewAdComponent }  from './newAd.component';
import { AdDetailComponent }  from './adDetail.component';

import { AdRoutingModule } from './ad-routing.module';

import { DatePickerComponent }  from '../ui/date-picker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdRoutingModule
  ],
  declarations: [
    NewAdComponent,
    AdDetailComponent,
    DatePickerComponent
  ]
})
export class AdModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
