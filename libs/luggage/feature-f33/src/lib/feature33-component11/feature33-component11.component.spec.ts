import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component11Component } from './feature33-component11.component';

describe('Feature33Component11Component', () => {
  let component: Feature33Component11Component;
  let fixture: ComponentFixture<Feature33Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature33Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
