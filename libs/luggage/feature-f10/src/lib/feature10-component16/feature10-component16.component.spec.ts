import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component16Component } from './feature10-component16.component';

describe('Feature10Component16Component', () => {
  let component: Feature10Component16Component;
  let fixture: ComponentFixture<Feature10Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature10Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
