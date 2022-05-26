import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '@src/core-data';
import { from, Observable } from 'rxjs';
import { Widget } from '@src/api-interfaces';

@Component({
  selector: 'src-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  widgets$: Observable<Widget[]> = from([]);

  ngOnInit() {
    this.widgets$ = this.widgets.all();
  }

  constructor(private readonly widgets: WidgetsService) {}
}
