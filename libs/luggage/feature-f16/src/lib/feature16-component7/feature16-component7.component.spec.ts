import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component7Component } from './feature16-component7.component';

describe('Feature16Component7Component', () => {
  let component: Feature16Component7Component;
  let fixture: ComponentFixture<Feature16Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature16Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
