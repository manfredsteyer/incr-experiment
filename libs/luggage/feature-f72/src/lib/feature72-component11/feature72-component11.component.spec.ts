import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component11Component } from './feature72-component11.component';

describe('Feature72Component11Component', () => {
  let component: Feature72Component11Component;
  let fixture: ComponentFixture<Feature72Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature72Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
