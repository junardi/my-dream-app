import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-new-cmp',
	templateUrl: './new-cmp.component.html',
	styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {   

	newComponent = "Entered in new component created and auto loaded";	

	constructor() { }

	ngOnInit() {
	}

}
