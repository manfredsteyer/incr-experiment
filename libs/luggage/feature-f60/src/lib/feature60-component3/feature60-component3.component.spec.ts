import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component3Component } from './feature60-component3.component';

describe('Feature60Component3Component', () => {
  let component: Feature60Component3Component;
  let fixture: ComponentFixture<Feature60Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
