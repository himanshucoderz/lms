import { Component, OnInit } from '@angular/core';
//import "../../assets/vendors/custom/jquery-ui/jquery-ui.bundle.js";
declare var $
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$( "#sortable" ).sortable();
  }

}
