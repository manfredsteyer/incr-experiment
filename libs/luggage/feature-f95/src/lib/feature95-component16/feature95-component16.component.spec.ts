import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component16Component } from './feature95-component16.component';

describe('Feature95Component16Component', () => {
  let component: Feature95Component16Component;
  let fixture: ComponentFixture<Feature95Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature95Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
