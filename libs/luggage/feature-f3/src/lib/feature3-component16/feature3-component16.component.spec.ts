import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component16Component } from './feature3-component16.component';

describe('Feature3Component16Component', () => {
  let component: Feature3Component16Component;
  let fixture: ComponentFixture<Feature3Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
