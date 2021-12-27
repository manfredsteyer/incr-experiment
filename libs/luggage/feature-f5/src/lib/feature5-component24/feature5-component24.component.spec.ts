import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component24Component } from './feature5-component24.component';

describe('Feature5Component24Component', () => {
  let component: Feature5Component24Component;
  let fixture: ComponentFixture<Feature5Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature5Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
