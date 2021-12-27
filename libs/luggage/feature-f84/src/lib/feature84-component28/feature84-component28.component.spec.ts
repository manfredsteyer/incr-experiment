import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component28Component } from './feature84-component28.component';

describe('Feature84Component28Component', () => {
  let component: Feature84Component28Component;
  let fixture: ComponentFixture<Feature84Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature84Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
