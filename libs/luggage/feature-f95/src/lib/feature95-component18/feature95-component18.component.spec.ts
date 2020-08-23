import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component18Component } from './feature95-component18.component';

describe('Feature95Component18Component', () => {
  let component: Feature95Component18Component;
  let fixture: ComponentFixture<Feature95Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature95Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
