import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component7Component } from './feature8-component7.component';

describe('Feature8Component7Component', () => {
  let component: Feature8Component7Component;
  let fixture: ComponentFixture<Feature8Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature8Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
