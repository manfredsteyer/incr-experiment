import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component24Component } from './feature8-component24.component';

describe('Feature8Component24Component', () => {
  let component: Feature8Component24Component;
  let fixture: ComponentFixture<Feature8Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature8Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
