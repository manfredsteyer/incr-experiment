import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component7Component } from './feature53-component7.component';

describe('Feature53Component7Component', () => {
  let component: Feature53Component7Component;
  let fixture: ComponentFixture<Feature53Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature53Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
