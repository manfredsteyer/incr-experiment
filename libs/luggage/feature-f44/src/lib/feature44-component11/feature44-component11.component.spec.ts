import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component11Component } from './feature44-component11.component';

describe('Feature44Component11Component', () => {
  let component: Feature44Component11Component;
  let fixture: ComponentFixture<Feature44Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
