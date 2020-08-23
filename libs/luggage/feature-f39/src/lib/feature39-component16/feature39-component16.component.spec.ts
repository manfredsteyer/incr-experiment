import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component16Component } from './feature39-component16.component';

describe('Feature39Component16Component', () => {
  let component: Feature39Component16Component;
  let fixture: ComponentFixture<Feature39Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature39Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
