import { Component, OnInit } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss']
})
export class ContentWrapperComponent implements OnInit {
  directives: [ChildComponent];
  name = 'Parent Component';
  constructor() { }

  ngOnInit() {
  }

}
