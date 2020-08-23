import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component11Component } from './feature64-component11.component';

describe('Feature64Component11Component', () => {
  let component: Feature64Component11Component;
  let fixture: ComponentFixture<Feature64Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
