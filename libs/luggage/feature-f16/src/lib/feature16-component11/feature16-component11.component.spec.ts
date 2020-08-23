import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component11Component } from './feature16-component11.component';

describe('Feature16Component11Component', () => {
  let component: Feature16Component11Component;
  let fixture: ComponentFixture<Feature16Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
