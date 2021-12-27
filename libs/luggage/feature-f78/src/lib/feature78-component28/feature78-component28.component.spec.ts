import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component28Component } from './feature78-component28.component';

describe('Feature78Component28Component', () => {
  let component: Feature78Component28Component;
  let fixture: ComponentFixture<Feature78Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature78Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
