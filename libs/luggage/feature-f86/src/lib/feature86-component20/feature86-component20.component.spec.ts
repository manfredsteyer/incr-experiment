import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component20Component } from './feature86-component20.component';

describe('Feature86Component20Component', () => {
  let component: Feature86Component20Component;
  let fixture: ComponentFixture<Feature86Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
