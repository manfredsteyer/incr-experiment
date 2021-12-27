import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component3Component } from './feature24-component3.component';

describe('Feature24Component3Component', () => {
  let component: Feature24Component3Component;
  let fixture: ComponentFixture<Feature24Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature24Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
