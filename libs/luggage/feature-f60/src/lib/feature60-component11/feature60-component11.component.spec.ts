import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component11Component } from './feature60-component11.component';

describe('Feature60Component11Component', () => {
  let component: Feature60Component11Component;
  let fixture: ComponentFixture<Feature60Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature60Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
