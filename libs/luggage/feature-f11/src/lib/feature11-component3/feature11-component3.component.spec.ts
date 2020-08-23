import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component3Component } from './feature11-component3.component';

describe('Feature11Component3Component', () => {
  let component: Feature11Component3Component;
  let fixture: ComponentFixture<Feature11Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature11Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
