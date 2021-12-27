import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component7Component } from './feature4-component7.component';

describe('Feature4Component7Component', () => {
  let component: Feature4Component7Component;
  let fixture: ComponentFixture<Feature4Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature4Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
