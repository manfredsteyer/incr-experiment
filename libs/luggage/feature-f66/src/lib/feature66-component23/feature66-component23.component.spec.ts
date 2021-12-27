import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component23Component } from './feature66-component23.component';

describe('Feature66Component23Component', () => {
  let component: Feature66Component23Component;
  let fixture: ComponentFixture<Feature66Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature66Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
