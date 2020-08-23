import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component16Component } from './feature15-component16.component';

describe('Feature15Component16Component', () => {
  let component: Feature15Component16Component;
  let fixture: ComponentFixture<Feature15Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
