import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component7Component } from './feature34-component7.component';

describe('Feature34Component7Component', () => {
  let component: Feature34Component7Component;
  let fixture: ComponentFixture<Feature34Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature34Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
