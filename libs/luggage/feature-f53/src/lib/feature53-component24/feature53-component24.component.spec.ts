import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component24Component } from './feature53-component24.component';

describe('Feature53Component24Component', () => {
  let component: Feature53Component24Component;
  let fixture: ComponentFixture<Feature53Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature53Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
