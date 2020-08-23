import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component16Component } from './feature76-component16.component';

describe('Feature76Component16Component', () => {
  let component: Feature76Component16Component;
  let fixture: ComponentFixture<Feature76Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature76Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
