import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component16Component } from './feature32-component16.component';

describe('Feature32Component16Component', () => {
  let component: Feature32Component16Component;
  let fixture: ComponentFixture<Feature32Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
