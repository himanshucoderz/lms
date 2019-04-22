import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OjtComponent } from './ojt.component';

describe('OjtComponent', () => {
  let component: OjtComponent;
  let fixture: ComponentFixture<OjtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OjtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OjtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
