import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component10Component } from './feature24-component10.component';

describe('Feature24Component10Component', () => {
  let component: Feature24Component10Component;
  let fixture: ComponentFixture<Feature24Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature24Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
