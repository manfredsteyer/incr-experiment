import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component4Component } from './feature9-component4.component';

describe('Feature9Component4Component', () => {
  let component: Feature9Component4Component;
  let fixture: ComponentFixture<Feature9Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature9Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
