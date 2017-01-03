import { Component, Input, AfterViewInit} from '@angular/core';

@Component({
  selector: 'date-picker',
  templateUrl: './app/ui/date-picker.html'
})
export class DatePickerComponent implements AfterViewInit {

  @Input()
  public date: Date;

  constructor() {
  }

  ngAfterViewInit() {
    $('.ui.calendar').calendar({type: 'date', onChange: (inputDate, text) => {
      this.date.setDate(inputDate.getDate());
    }});
  }

}
