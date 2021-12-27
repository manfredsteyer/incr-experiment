import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component24Component } from './feature16-component24.component';

describe('Feature16Component24Component', () => {
  let component: Feature16Component24Component;
  let fixture: ComponentFixture<Feature16Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature16Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
