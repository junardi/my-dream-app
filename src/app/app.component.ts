import { Component } from '@angular/core';  
import { MyServiceService } from './my-service.service';    
import { HttpClient } from '@angular/common/http';      

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  title = 'my-dream-app';  
  todayDate;  
  serviceCreated;  

  users;

  constructor(private service: MyServiceService, private httpClient: HttpClient) {}   
  ngOnInit() {
  	//console.log(this.service.serviceProperty);
  	this.service.serviceProperty = "Change Service Property";
  	this.todayDate = this.service.showTodayDate();
  	this.serviceCreated = this.service.serviceProperty;  
	this.httpClient.get("http://jsonplaceholder.typicode.com/users").subscribe((data) => this.users = data );                                                    
  }

  months = [
  	"January", 
  	"Feburary", 
  	"March", 
  	"April", 
  	"May", 
    "June", 
    "July",   
    "August", 
    "September",
    "October", 
    "November", 
    "December"
  ];      

  jsonval = { 
  	name:'Rox', 
  	age:'25', 
  	address: {
  		a1:'Mumbai', 
  		a2:'Karnataka'
  	}
  };

  isAvailable = true;    

  myClickFunction(event) {
  	alert("Button is clicked"); 
  	console.log(event);
  }   

  changeMonths(event) {
  	console.log("Changed the month in the dropdown.");   
  	console.log(event);
  }

}











