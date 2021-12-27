import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component7Component } from './feature20-component7.component';

describe('Feature20Component7Component', () => {
  let component: Feature20Component7Component;
  let fixture: ComponentFixture<Feature20Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature20Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
