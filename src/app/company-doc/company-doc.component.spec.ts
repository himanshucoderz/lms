import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDocComponent } from './company-doc.component';

describe('CompanyDocComponent', () => {
  let component: CompanyDocComponent;
  let fixture: ComponentFixture<CompanyDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
