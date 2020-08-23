import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component16Component } from './feature54-component16.component';

describe('Feature54Component16Component', () => {
  let component: Feature54Component16Component;
  let fixture: ComponentFixture<Feature54Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature54Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
