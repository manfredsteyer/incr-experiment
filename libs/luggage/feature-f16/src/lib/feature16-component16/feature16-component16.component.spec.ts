import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component16Component } from './feature16-component16.component';

describe('Feature16Component16Component', () => {
  let component: Feature16Component16Component;
  let fixture: ComponentFixture<Feature16Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
