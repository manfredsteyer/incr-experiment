import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component10Component } from './feature66-component10.component';

describe('Feature66Component10Component', () => {
  let component: Feature66Component10Component;
  let fixture: ComponentFixture<Feature66Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature66Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
