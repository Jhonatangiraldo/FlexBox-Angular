import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * data to display in the view
   */
  private data: number[];
  
  constructor() {}

  ngOnInit() {
    this.fillData();
  }

  private fillData() {
    this.data = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  }
}
