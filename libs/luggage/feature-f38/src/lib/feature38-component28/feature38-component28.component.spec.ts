import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component28Component } from './feature38-component28.component';

describe('Feature38Component28Component', () => {
  let component: Feature38Component28Component;
  let fixture: ComponentFixture<Feature38Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature38Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
