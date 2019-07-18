import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }   

  serviceProperty = "Service Created";

  showTodayDate() {
  	let today = new Date(); 
  	return today; 
  }

}
