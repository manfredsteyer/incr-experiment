import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component11Component } from './feature25-component11.component';

describe('Feature25Component11Component', () => {
  let component: Feature25Component11Component;
  let fixture: ComponentFixture<Feature25Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature25Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
