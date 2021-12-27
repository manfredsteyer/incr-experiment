import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component28Component } from './feature89-component28.component';

describe('Feature89Component28Component', () => {
  let component: Feature89Component28Component;
  let fixture: ComponentFixture<Feature89Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature89Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
