import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component16Component } from './feature8-component16.component';

describe('Feature8Component16Component', () => {
  let component: Feature8Component16Component;
  let fixture: ComponentFixture<Feature8Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
