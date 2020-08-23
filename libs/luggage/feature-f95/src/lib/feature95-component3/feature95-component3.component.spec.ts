import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component3Component } from './feature95-component3.component';

describe('Feature95Component3Component', () => {
  let component: Feature95Component3Component;
  let fixture: ComponentFixture<Feature95Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature95Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
