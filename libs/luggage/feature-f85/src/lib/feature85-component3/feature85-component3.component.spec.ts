import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component3Component } from './feature85-component3.component';

describe('Feature85Component3Component', () => {
  let component: Feature85Component3Component;
  let fixture: ComponentFixture<Feature85Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
