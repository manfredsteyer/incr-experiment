import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component3Component } from './feature15-component3.component';

describe('Feature15Component3Component', () => {
  let component: Feature15Component3Component;
  let fixture: ComponentFixture<Feature15Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
