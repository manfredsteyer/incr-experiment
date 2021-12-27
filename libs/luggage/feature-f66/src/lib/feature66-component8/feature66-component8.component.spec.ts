import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component8Component } from './feature66-component8.component';

describe('Feature66Component8Component', () => {
  let component: Feature66Component8Component;
  let fixture: ComponentFixture<Feature66Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature66Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
