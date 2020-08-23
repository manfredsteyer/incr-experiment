import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component16Component } from './feature48-component16.component';

describe('Feature48Component16Component', () => {
  let component: Feature48Component16Component;
  let fixture: ComponentFixture<Feature48Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature48Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
