import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component3Component } from './feature88-component3.component';

describe('Feature88Component3Component', () => {
  let component: Feature88Component3Component;
  let fixture: ComponentFixture<Feature88Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature88Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
