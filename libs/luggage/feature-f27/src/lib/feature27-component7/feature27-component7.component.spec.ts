import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component7Component } from './feature27-component7.component';

describe('Feature27Component7Component', () => {
  let component: Feature27Component7Component;
  let fixture: ComponentFixture<Feature27Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature27Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
