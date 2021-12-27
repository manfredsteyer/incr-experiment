import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component11Component } from './feature12-component11.component';

describe('Feature12Component11Component', () => {
  let component: Feature12Component11Component;
  let fixture: ComponentFixture<Feature12Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature12Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
