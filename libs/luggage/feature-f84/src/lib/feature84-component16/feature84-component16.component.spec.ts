import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component16Component } from './feature84-component16.component';

describe('Feature84Component16Component', () => {
  let component: Feature84Component16Component;
  let fixture: ComponentFixture<Feature84Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature84Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
