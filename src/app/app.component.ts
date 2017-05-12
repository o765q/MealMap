import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title: string = 'Map';
  // lat: number = 34.729384;
  // lng: number = 135.499374;
  zoom : number = 15;
  markers: marker[] = [
	  {
		  lat: 34.629384,
		  lng: 135.499374,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 34.729384,
		  lng: 135.499374,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 34.829384,
		  lng: 135.499374,
		  label: 'C',
		  draggable: true
	  }
  ]
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

