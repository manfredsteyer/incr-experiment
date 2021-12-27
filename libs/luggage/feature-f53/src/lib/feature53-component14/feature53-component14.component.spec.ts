import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component14Component } from './feature53-component14.component';

describe('Feature53Component14Component', () => {
  let component: Feature53Component14Component;
  let fixture: ComponentFixture<Feature53Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature53Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
