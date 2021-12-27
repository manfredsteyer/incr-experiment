import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component11Component } from './feature90-component11.component';

describe('Feature90Component11Component', () => {
  let component: Feature90Component11Component;
  let fixture: ComponentFixture<Feature90Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
