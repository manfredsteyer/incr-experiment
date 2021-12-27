import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component3Component } from './feature64-component3.component';

describe('Feature64Component3Component', () => {
  let component: Feature64Component3Component;
  let fixture: ComponentFixture<Feature64Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature64Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
