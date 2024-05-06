import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series-list/series-list.component'; // Import SeriesListComponent

@NgModule({
  declarations: [
    SeriesListComponent, // Declare SeriesListComponent
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [SeriesListComponent], // Export SeriesListComponent
})
export class SeriesModule {}
