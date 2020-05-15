import { Component, OnInit } from '@angular/core';
import { HotelsService } from './hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
  providers: [HotelsService]
})
export class HotelsComponent implements OnInit {

  Hotels = [];
  constructor( private hotelsService: HotelsService) {  }

  ngOnInit(): void {
    this.Hotels = this.hotelsService.Hotels;
  }

}
