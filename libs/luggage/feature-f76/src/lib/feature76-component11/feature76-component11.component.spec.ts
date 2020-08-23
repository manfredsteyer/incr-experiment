import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component11Component } from './feature76-component11.component';

describe('Feature76Component11Component', () => {
  let component: Feature76Component11Component;
  let fixture: ComponentFixture<Feature76Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature76Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
