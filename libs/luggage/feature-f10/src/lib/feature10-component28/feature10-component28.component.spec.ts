import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component28Component } from './feature10-component28.component';

describe('Feature10Component28Component', () => {
  let component: Feature10Component28Component;
  let fixture: ComponentFixture<Feature10Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
