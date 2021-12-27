import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component7Component } from './feature72-component7.component';

describe('Feature72Component7Component', () => {
  let component: Feature72Component7Component;
  let fixture: ComponentFixture<Feature72Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature72Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
