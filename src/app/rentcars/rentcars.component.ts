import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rentcars',
  templateUrl: './rentcars.component.html',
  styleUrls: ['./rentcars.component.scss'],
  providers: [ CarService ]
})
export class RentcarsComponent implements OnInit {

  cars = [];

  constructor( private carService: CarService , private navigateNow: Router) { }

  ngOnInit(): void {
    this.cars = this.carService.cars;
  }


  checkLogining() {
    // THIS FOR JUST TESTING
    this.navigateNow.navigate(['/Registeration']);
  }
}
