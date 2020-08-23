import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component16Component } from './feature51-component16.component';

describe('Feature51Component16Component', () => {
  let component: Feature51Component16Component;
  let fixture: ComponentFixture<Feature51Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
