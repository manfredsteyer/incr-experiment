import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component3Component } from './feature18-component3.component';

describe('Feature18Component3Component', () => {
  let component: Feature18Component3Component;
  let fixture: ComponentFixture<Feature18Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature18Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
