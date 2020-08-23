import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component9Component } from './feature66-component9.component';

describe('Feature66Component9Component', () => {
  let component: Feature66Component9Component;
  let fixture: ComponentFixture<Feature66Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature66Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
