import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component28Component } from './feature93-component28.component';

describe('Feature93Component28Component', () => {
  let component: Feature93Component28Component;
  let fixture: ComponentFixture<Feature93Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature93Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
