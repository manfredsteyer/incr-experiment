import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component3Component } from './feature21-component3.component';

describe('Feature21Component3Component', () => {
  let component: Feature21Component3Component;
  let fixture: ComponentFixture<Feature21Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature21Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
