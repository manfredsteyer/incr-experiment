import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component16Component } from './feature4-component16.component';

describe('Feature4Component16Component', () => {
  let component: Feature4Component16Component;
  let fixture: ComponentFixture<Feature4Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature4Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
