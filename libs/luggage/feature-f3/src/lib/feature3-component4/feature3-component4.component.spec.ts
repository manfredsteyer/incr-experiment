import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component4Component } from './feature3-component4.component';

describe('Feature3Component4Component', () => {
  let component: Feature3Component4Component;
  let fixture: ComponentFixture<Feature3Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
