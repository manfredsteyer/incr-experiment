import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component20Component } from './feature28-component20.component';

describe('Feature28Component20Component', () => {
  let component: Feature28Component20Component;
  let fixture: ComponentFixture<Feature28Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature28Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
