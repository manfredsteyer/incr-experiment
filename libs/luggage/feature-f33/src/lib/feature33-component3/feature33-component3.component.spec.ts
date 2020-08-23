import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component3Component } from './feature33-component3.component';

describe('Feature33Component3Component', () => {
  let component: Feature33Component3Component;
  let fixture: ComponentFixture<Feature33Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature33Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
