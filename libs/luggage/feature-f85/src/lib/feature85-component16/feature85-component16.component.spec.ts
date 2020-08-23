import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component16Component } from './feature85-component16.component';

describe('Feature85Component16Component', () => {
  let component: Feature85Component16Component;
  let fixture: ComponentFixture<Feature85Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
