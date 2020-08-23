import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component3Component } from './feature55-component3.component';

describe('Feature55Component3Component', () => {
  let component: Feature55Component3Component;
  let fixture: ComponentFixture<Feature55Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
