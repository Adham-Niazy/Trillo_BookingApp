import { Component, OnInit } from '@angular/core';
import { FlightsService } from './flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
  providers: [FlightsService]
})
export class FlightsComponent implements OnInit {

  Flights = [];

  constructor( private flightsService: FlightsService ) { }

  ngOnInit(): void {
    this.Flights = this.flightsService.Flights;
  }

}
