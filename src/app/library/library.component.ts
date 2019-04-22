import { Component, OnInit } from '@angular/core';
import * as DataTable from '../../assets/vendors/custom/datatables/datatables.bundle.js';
declare var $;


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.sass']
})
export class LibraryComponent implements OnInit {

  visibleGrid:boolean = false;
  visibleList:boolean = true;
  constructor() { }

  ngOnInit() {




  }

  listView(event){
  	  this.visibleGrid = true;
  	  this.visibleList = false; 
  }

  gridView(event){
  	  this.visibleGrid = false;
  	  this.visibleList = true; 
  }

}
