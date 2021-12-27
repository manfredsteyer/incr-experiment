import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component24Component } from './feature12-component24.component';

describe('Feature12Component24Component', () => {
  let component: Feature12Component24Component;
  let fixture: ComponentFixture<Feature12Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature12Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
