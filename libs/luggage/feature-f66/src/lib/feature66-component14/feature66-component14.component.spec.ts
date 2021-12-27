import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component14Component } from './feature66-component14.component';

describe('Feature66Component14Component', () => {
  let component: Feature66Component14Component;
  let fixture: ComponentFixture<Feature66Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature66Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
