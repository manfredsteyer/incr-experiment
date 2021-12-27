import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component7Component } from './feature33-component7.component';

describe('Feature33Component7Component', () => {
  let component: Feature33Component7Component;
  let fixture: ComponentFixture<Feature33Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature33Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
