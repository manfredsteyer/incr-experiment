import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component16Component } from './feature36-component16.component';

describe('Feature36Component16Component', () => {
  let component: Feature36Component16Component;
  let fixture: ComponentFixture<Feature36Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
