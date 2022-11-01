import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { dataSeries } from './dataSeries';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  constructor(private seriesService: SeriesService) { }
  seriess: Array<Serie>=[] ;

  getSeriesList(): Array<Serie> {
    return dataSeries;
  }
  ngOnInit() {
  this.seriess=this.getSeriesList();
  }

}
