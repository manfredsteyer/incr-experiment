import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component28Component } from './feature66-component28.component';

describe('Feature66Component28Component', () => {
  let component: Feature66Component28Component;
  let fixture: ComponentFixture<Feature66Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature66Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
