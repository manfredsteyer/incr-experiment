import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component6Component } from './feature95-component6.component';

describe('Feature95Component6Component', () => {
  let component: Feature95Component6Component;
  let fixture: ComponentFixture<Feature95Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature95Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
