import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component11Component } from './feature66-component11.component';

describe('Feature66Component11Component', () => {
  let component: Feature66Component11Component;
  let fixture: ComponentFixture<Feature66Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature66Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
