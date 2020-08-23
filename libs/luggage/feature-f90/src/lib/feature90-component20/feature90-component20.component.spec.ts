import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component20Component } from './feature90-component20.component';

describe('Feature90Component20Component', () => {
  let component: Feature90Component20Component;
  let fixture: ComponentFixture<Feature90Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature90Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
