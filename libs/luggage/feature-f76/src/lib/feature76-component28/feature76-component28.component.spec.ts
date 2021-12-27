import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component28Component } from './feature76-component28.component';

describe('Feature76Component28Component', () => {
  let component: Feature76Component28Component;
  let fixture: ComponentFixture<Feature76Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature76Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
