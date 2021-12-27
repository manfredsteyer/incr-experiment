import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component7Component } from './feature58-component7.component';

describe('Feature58Component7Component', () => {
  let component: Feature58Component7Component;
  let fixture: ComponentFixture<Feature58Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature58Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
