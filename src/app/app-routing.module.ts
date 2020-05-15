import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { FlightsComponent } from './flights/flights.component';
import { RentcarsComponent } from './rentcars/rentcars.component';
import { ToursComponent } from './tours/tours.component';
import { UserPorfileComponent } from './user-porfile/user-porfile.component';
import { HotelComponent } from './hotels/hotel/hotel.component';
import { AuthComponent } from './Auth/auth.component';
import { HotelsGuard } from './hotels/hotel/hotels.guard';


const AppRoutes: Routes = [
  // MISSING THE BASE ROUTING IT WILL BE DONE LATER
  { path: '' , redirectTo: 'Hotels' , pathMatch: 'full' },
  // NAVIGATION OF SIDEBAR BUTTONS
  { path: 'Hotels' , component: HotelsComponent },
  { path: 'Hotels/Hotel/:hotelId/:HotelName' , component: HotelComponent , canActivate: [ HotelsGuard ]},
  { path: 'Flights' , component: FlightsComponent },
  { path: 'Rent' , component: RentcarsComponent },
  { path: 'Tours' , component: ToursComponent },
  // NAVIGATION OF USER-NAVIGATION BUTTON
  { path: 'Profile' , component: UserPorfileComponent },
  // REGISTERATION ROUTING
  { path: 'Registeration' , component: AuthComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
