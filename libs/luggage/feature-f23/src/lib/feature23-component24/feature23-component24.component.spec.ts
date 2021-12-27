import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component24Component } from './feature23-component24.component';

describe('Feature23Component24Component', () => {
  let component: Feature23Component24Component;
  let fixture: ComponentFixture<Feature23Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature23Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
