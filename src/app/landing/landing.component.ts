import { Component, OnInit } from '@angular/core';
declare var $;
declare var datepicker;
declare var KTUtil;
declare var KTDatatable;
declare var KTLayout;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {


  constructor() { }

  ngOnInit() {

      var arrows;
	    if (KTUtil.isRTL()) {
	        arrows = {
	            leftArrow: '<i class="la la-angle-right"></i>',
	            rightArrow: '<i class="la la-angle-left"></i>'
	        }
	    } else {
	        arrows = {
	            leftArrow: '<i class="la la-angle-left"></i>',
	            rightArrow: '<i class="la la-angle-right"></i>'
	        }
	    }


  	     $('#kt_datepicker_6').datepicker({
  	     	rtl: KTUtil.isRTL(),
            todayHighlight: true,
            templates: arrows
        });



        if ($('#kt_recent_orders').length === 0) {
            return;
        }

        var datatable = $('#kt_recent_orders').KTDatatable({
            // datasource definition
            data: {
                type: 'remote',
                source: {
                    read: {
                        url: 'https://keenthemes.com/keen/themes/themes/keen/dist/preview/inc/api/datatables/demos/default.php',
                    },
                },
                pageSize: 10,
                serverPaging: true,
                serverFiltering: true,
                serverSorting: true
            },

            // layout definition
            layout: {
                scroll: true,
                footer: false,
                height: 430
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#generalSearch'),
            },

            // columns definition
            columns: [{
                field: 'id',
                title: '#',
                sortable: false,
                width: 20,
                type: 'number',
                selector: {class: 'kt-checkbox--solid'},
                textAlign: 'center',
            }, {
                field: 'employee_id',
                title: 'Order ID',
                template: function(row) {
                    return '<span class="kt-label-font-color-3 kt-font-bold">' + row.employee_id + '</span>';
                },
            }, {
                field: 'name',
                title: 'Customer',
                width: 130,
                template: function(row) {
                    return '<span class="kt-label-font-color-3 kt-font-bold">' + row.first_name + ' ' + row.last_name + '</span>';
                },
            }, {
                field: 'hire_date',
                title: 'Date',
                type: 'date',
                format: 'MM/DD/YYYY',
            }, {
                field: 'status',
                title: 'Status',
	            autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                    var status = {
                        1: {
                            'title': 'Pending',
                            'class': 'brand'
                        },
                        2: {
                            'title': 'Delivered',
                            'class': 'focus'
                        },
                        3: {
                            'title': 'Canceled',
                            'class': 'primary'
                        },
                        4: {
                            'title': 'Success',
                            'class': 'success'
                        },
                        5: {
                            'title': 'Info',
                            'class': 'info'
                        },
                        6: {
                            'title': 'Danger',
                            'class': 'danger'
                        },
                        7: {
                            'title': 'Warning',
                            'class': 'warning'
                        }
                    };
                    return '<span class="kt-badge kt-badge--' + status[row.status].class + ' kt-badge--dot kt-badge--md"></span>&nbsp;&nbsp;<span class="kt-label-font-color-2 kt-font-bold">' +
                        status[row.type].title + '</span>';
                }
            }, {
                field: 'Actions',
                title: 'Actions',
                sortable: false,
                width: 80,
                overflow: 'visible',
                textAlign: 'center',
	            autoHide: false,
                template: function() {
                    return '\
                        <div class="dropdown" >\
                            <a href="#" class="btn btn-clean btn-icon btn-sm btn-icon-md" data-toggle="dropdown">\
                                <i class="la la-ellipsis-h"></i>\
                            </a>\
                            <div class="dropdown-menu dropdown-menu-right">\
                                <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\
                                <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\
                                <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\
                            </div>\
                        </div>\
                        <a href="#" class="btn btn-clean btn-icon btn-sm btn-icon-md" title="Edit details">\
                            <i class="la la-edit"></i>\
                        </a>\
                    ';
                }
            }]
        });

        $('#kt_form_status').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'status');
        });

        $('#kt_form_type').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'type');
        });

        $('#kt_form_status,#kt_form_type').selectpicker();

        // Reload datatable layout on aside menu toggle
        if (KTLayout.getAsideSecondaryToggler && KTLayout.getAsideSecondaryToggler()) {
            KTLayout.getAsideSecondaryToggler().on('toggle', function() {
                datatable.redraw();
            });
        }

        // Fix datatable layout in tabs
        datatable.closest('.kt-content__body').find('[data-toggle="tab"]').on('shown.bs.tab', function(e) {
            datatable.redraw();
        });



  }

}
