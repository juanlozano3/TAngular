// src/app/series/series-list/series-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie.model';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html'
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  averageSeasons: number = 0;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data: Serie[]) => {
      this.series = data;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons(): void {
    let totalSeasons = 0;
    for (const serie of this.series) {
      totalSeasons += serie.seasons;
    }
    this.averageSeasons = totalSeasons / this.series.length;
  }
}
