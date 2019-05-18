import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;
declare var KTDatatable;
declare var selectpicker;
declare var KTUtil;
declare var KTWizard;




@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.sass']
})
export class ClassComponent implements OnInit {

  constructor() { }

    ngAfterViewInit(){
        
        $( "#sortable" ).sortable();  
    }

  ngOnInit() {
  //$( "#sortable" ).sortable();

    var wizardEl;
    var formEl;
    var validator;
    var wizard;

        wizardEl = KTUtil.get('kt_wizard_v3');
        formEl = $('#kt_form');



        wizard = new KTWizard('kt_wizard_v3', {
            startStep: 1,
        });

        // Validation before going to next page
        wizard.on('beforeNext', function(wizardObj) {
           
        })

        // Change event
        wizard.on('change', function(wizard) {
            KTUtil.scrollTop();    
        });


        var datatable = $('.kt-datatable').KTDatatable({
            data: {
                saveState: {
                    cookie: false
                },
            },
            search: {
                input: $('#generalSearch'),
            },
            columns: [{
                    field: 'DepositPaid',
                    type: 'number',
                },
                {
                    field: 'OrderDate',
                    type: 'date',
                    format: 'YYYY-MM-DD',
                }, {
                    field: 'Status',
                    title: 'Status',
                    autoHide: false,
                    // callback function support for column rendering
                    template: function(row) {
                        var status = {
                            1: {
                                'title': 'Pending',
                                'class': 'kt-badge--brand'
                            },
                            2: {
                                'title': 'Delivered',
                                'class': ' kt-badge--metal'
                            },
                            3: {
                                'title': 'Canceled',
                                'class': ' kt-badge--primary'
                            },
                            4: {
                                'title': 'Success',
                                'class': ' kt-badge--success'
                            },
                            5: {
                                'title': 'Info',
                                'class': ' kt-badge--info'
                            },
                            6: {
                                'title': 'Danger',
                                'class': ' kt-badge--danger'
                            },
                            7: {
                                'title': 'Warning',
                                'class': ' kt-badge--warning'
                            },
                        };
                        return '<span class="kt-badge ' + status[row.Status].class + ' kt-badge--inline kt-badge--pill">' + status[row.Status].title + '</span>';
                    },
                }, {
                    field: 'Type',
                    title: 'Type',
                    autoHide: false,
                    // callback function support for column rendering
                    template: function(row) {
                        var status = {
                            1: {
                                'title': 'Online',
                                'state': 'danger'
                            },
                            2: {
                                'title': 'Retail',
                                'state': 'primary'
                            },
                            3: {
                                'title': 'Direct',
                                'state': 'accent'
                            },
                        };
                        return '<span class="kt-badge kt-badge--' + status[row.Type].state + ' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-' + status[row.Type].state + '">' + status[row.Type].title + '</span>';
                    },
                },
            ],
        });

        $('#kt_form_status').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'status');
        });

        $('#kt_form_type').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'type');
        });

        $('#kt_form_status,#kt_form_type').selectpicker();
  
  }

}
