import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component11Component } from './feature91-component11.component';

describe('Feature91Component11Component', () => {
  let component: Feature91Component11Component;
  let fixture: ComponentFixture<Feature91Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature91Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
