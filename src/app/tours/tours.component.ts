import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToursService } from './tours.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
  providers: [ToursService]
})
export class ToursComponent implements OnInit {

  Tours = [];

  constructor( private route: Router, private toursService: ToursService ) { }

  ngOnInit(): void {

    this.Tours = this.toursService.tours;

  }

  checkLogining() {
    this.route.navigate(['/Registeration']);
  }

}
