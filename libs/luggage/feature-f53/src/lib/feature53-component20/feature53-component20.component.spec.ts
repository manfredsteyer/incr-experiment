import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component20Component } from './feature53-component20.component';

describe('Feature53Component20Component', () => {
  let component: Feature53Component20Component;
  let fixture: ComponentFixture<Feature53Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature53Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
