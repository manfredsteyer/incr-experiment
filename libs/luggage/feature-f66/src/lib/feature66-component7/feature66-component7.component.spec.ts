import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component7Component } from './feature66-component7.component';

describe('Feature66Component7Component', () => {
  let component: Feature66Component7Component;
  let fixture: ComponentFixture<Feature66Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature66Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
