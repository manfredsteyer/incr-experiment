import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component3Component } from './feature73-component3.component';

describe('Feature73Component3Component', () => {
  let component: Feature73Component3Component;
  let fixture: ComponentFixture<Feature73Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature73Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
