import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component7Component } from './feature73-component7.component';

describe('Feature73Component7Component', () => {
  let component: Feature73Component7Component;
  let fixture: ComponentFixture<Feature73Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature73Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
