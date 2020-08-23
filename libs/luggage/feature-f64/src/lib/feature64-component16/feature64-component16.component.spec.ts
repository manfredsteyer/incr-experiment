import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component16Component } from './feature64-component16.component';

describe('Feature64Component16Component', () => {
  let component: Feature64Component16Component;
  let fixture: ComponentFixture<Feature64Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
