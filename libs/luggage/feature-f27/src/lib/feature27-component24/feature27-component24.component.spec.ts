import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component24Component } from './feature27-component24.component';

describe('Feature27Component24Component', () => {
  let component: Feature27Component24Component;
  let fixture: ComponentFixture<Feature27Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature27Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
