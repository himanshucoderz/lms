import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ojt',
  templateUrl: './ojt.component.html',
  styleUrls: ['./ojt.component.sass']
})
export class OjtComponent implements OnInit {
  ojtForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  	this.ojtForm= this.fb.group({
  		type: [''],
      trained: [''],
      hours: [''],
  		supervisor: ['']
  	})

  }

  onSubmit(): void{
  	console.log(this.ojtForm.value);
  }


}
