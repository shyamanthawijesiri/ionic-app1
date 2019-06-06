import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
 private _places: Place[] = [

  new Place(
    'p1',
    'colombo',
    'https://media-cdn.tripadvisor.com/media/photo-s/0e/75/d8/95/infinity-pool.jpg',
    'beautiful',
    150.00
  ),
     
  new Place(
    'p2',
    'kandy',
    'https://t-ec.bstatic.com/images/hotel/max1024x768/519/51928766.jpg',
    'romantic',
    350.00
  ),
  
  new Place(
    'p2',
    'jaffna',
    'http://www.srilankanexpeditions.com/accomadation_img/45029.jpg',
    'hot',
    50.00
  ),
 ];

 get palces(){
   return [...this._places];
 }
  constructor() { }

  getPlace(id: String){
    return {...this._places.find(   p => p.id === id  )}
  }
}
