import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobheaderComponent } from './mobheader.component';

describe('MobheaderComponent', () => {
  let component: MobheaderComponent;
  let fixture: ComponentFixture<MobheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
