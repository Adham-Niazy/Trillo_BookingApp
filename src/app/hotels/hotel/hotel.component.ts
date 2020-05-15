import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { HotelsService } from '../hotels.service';


@Component({
  selector : 'app-hotel',
  templateUrl : './hotel.component.html',
  styleUrls : ['./hotel.component.scss'],
  providers : [HotelsService]
})

export class HotelComponent implements OnInit {
  selectedHotel: number;
  clickedHotel: any;
  constructor(private navigateNow: Router, private currentRoute: ActivatedRoute , private Hotel: HotelsService ) {}

  ngOnInit(): void  {
    this.selectedHotel = (+this.currentRoute.snapshot.params.hotelId) - 1;
    // BECAUSE MY ARRAY OF OBJECTS STARTS FORM 0 and ID's STARTS FROM !

    this.clickedHotel = this.Hotel.Hotels[this.selectedHotel];
  }

  checkLogining() {
    // THIS FOR JUST TESTING
    this.navigateNow.navigate(['/Registeration']);
  }

}


