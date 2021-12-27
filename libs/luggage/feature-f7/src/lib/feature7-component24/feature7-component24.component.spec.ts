import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component24Component } from './feature7-component24.component';

describe('Feature7Component24Component', () => {
  let component: Feature7Component24Component;
  let fixture: ComponentFixture<Feature7Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature7Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
