import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component3Component } from './feature46-component3.component';

describe('Feature46Component3Component', () => {
  let component: Feature46Component3Component;
  let fixture: ComponentFixture<Feature46Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature46Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
