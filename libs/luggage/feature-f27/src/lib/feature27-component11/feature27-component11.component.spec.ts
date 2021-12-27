import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component11Component } from './feature27-component11.component';

describe('Feature27Component11Component', () => {
  let component: Feature27Component11Component;
  let fixture: ComponentFixture<Feature27Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature27Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
