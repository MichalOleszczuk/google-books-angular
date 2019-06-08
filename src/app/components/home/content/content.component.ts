import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }
  private spin = false;

  ngOnInit() {
  }

  onSpin(event: MouseEvent) {
    console.log(event, 'SPIN');
    this.spin = !this.spin;
    console.log('spin', this.spin)
  }

}
