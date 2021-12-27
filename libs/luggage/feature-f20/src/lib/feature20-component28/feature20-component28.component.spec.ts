import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component28Component } from './feature20-component28.component';

describe('Feature20Component28Component', () => {
  let component: Feature20Component28Component;
  let fixture: ComponentFixture<Feature20Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature20Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
