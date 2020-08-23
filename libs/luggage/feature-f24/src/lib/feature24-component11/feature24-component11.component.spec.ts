import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component11Component } from './feature24-component11.component';

describe('Feature24Component11Component', () => {
  let component: Feature24Component11Component;
  let fixture: ComponentFixture<Feature24Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature24Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
