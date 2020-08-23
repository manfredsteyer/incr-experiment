import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component21Component } from './feature95-component21.component';

describe('Feature95Component21Component', () => {
  let component: Feature95Component21Component;
  let fixture: ComponentFixture<Feature95Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature95Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
