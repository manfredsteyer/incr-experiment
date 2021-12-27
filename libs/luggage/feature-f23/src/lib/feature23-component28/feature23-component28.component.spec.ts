import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component28Component } from './feature23-component28.component';

describe('Feature23Component28Component', () => {
  let component: Feature23Component28Component;
  let fixture: ComponentFixture<Feature23Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature23Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
