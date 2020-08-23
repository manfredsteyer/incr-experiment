import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component16Component } from './feature43-component16.component';

describe('Feature43Component16Component', () => {
  let component: Feature43Component16Component;
  let fixture: ComponentFixture<Feature43Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature43Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
