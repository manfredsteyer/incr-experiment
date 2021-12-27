import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component7Component } from './feature41-component7.component';

describe('Feature41Component7Component', () => {
  let component: Feature41Component7Component;
  let fixture: ComponentFixture<Feature41Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature41Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
