import { Component, OnInit } from '@angular/core';
declare var $;
declare var KTDatatable;
@Component({
  selector: 'app-company-doc',
  templateUrl: './company-doc.component.html',
  styleUrls: ['./company-doc.component.sass']
})
export class CompanyDocComponent implements OnInit {

  constructor() { }

  ngOnInit() {

          var datatable = $('.kt-datatable').KTDatatable({
            data: {
                saveState: {
                    cookie: false
                },
            }
        });

  }

}
