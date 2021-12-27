import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component20Component } from './feature61-component20.component';

describe('Feature61Component20Component', () => {
  let component: Feature61Component20Component;
  let fixture: ComponentFixture<Feature61Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature61Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
