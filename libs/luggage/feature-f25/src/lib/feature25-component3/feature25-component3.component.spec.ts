import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component3Component } from './feature25-component3.component';

describe('Feature25Component3Component', () => {
  let component: Feature25Component3Component;
  let fixture: ComponentFixture<Feature25Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature25Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
