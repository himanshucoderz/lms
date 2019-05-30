import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var KTUtil;
declare var KTWizard;
@Component({
  selector: 'app-comp-register',
  templateUrl: './comp-register.component.html',
  styleUrls: ['./comp-register.component.sass']
})
export class CompRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var wizardEl;
    var formEl;
    var validator;
    var wizard;


    wizardEl = KTUtil.get('kt_wizard_v4');
    formEl = $('#kt_form');

            wizard = new KTWizard('kt_wizard_v4', {
            startStep: 1,
        });

        // Validation before going to next page
        wizard.on('beforeNext', function(wizardObj) {
           
        })

        // Change event
        wizard.on('change', function(wizard) {
            KTUtil.scrollTop();    
        });

  }

}
