import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component16Component } from './feature31-component16.component';

describe('Feature31Component16Component', () => {
  let component: Feature31Component16Component;
  let fixture: ComponentFixture<Feature31Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature31Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
