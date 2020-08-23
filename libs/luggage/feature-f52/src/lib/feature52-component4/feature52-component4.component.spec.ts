import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component4Component } from './feature52-component4.component';

describe('Feature52Component4Component', () => {
  let component: Feature52Component4Component;
  let fixture: ComponentFixture<Feature52Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature52Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
