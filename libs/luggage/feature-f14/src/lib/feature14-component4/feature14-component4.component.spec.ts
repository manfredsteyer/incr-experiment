import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component4Component } from './feature14-component4.component';

describe('Feature14Component4Component', () => {
  let component: Feature14Component4Component;
  let fixture: ComponentFixture<Feature14Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature14Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
