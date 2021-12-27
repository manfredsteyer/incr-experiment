import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component7Component } from './feature48-component7.component';

describe('Feature48Component7Component', () => {
  let component: Feature48Component7Component;
  let fixture: ComponentFixture<Feature48Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature48Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
