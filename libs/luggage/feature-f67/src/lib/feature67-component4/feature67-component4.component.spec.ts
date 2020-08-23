import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component4Component } from './feature67-component4.component';

describe('Feature67Component4Component', () => {
  let component: Feature67Component4Component;
  let fixture: ComponentFixture<Feature67Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
