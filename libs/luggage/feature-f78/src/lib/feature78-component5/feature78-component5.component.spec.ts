import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component5Component } from './feature78-component5.component';

describe('Feature78Component5Component', () => {
  let component: Feature78Component5Component;
  let fixture: ComponentFixture<Feature78Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature78Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
