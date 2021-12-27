import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component24Component } from './feature60-component24.component';

describe('Feature60Component24Component', () => {
  let component: Feature60Component24Component;
  let fixture: ComponentFixture<Feature60Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
