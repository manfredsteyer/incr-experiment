import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component3Component } from './feature76-component3.component';

describe('Feature76Component3Component', () => {
  let component: Feature76Component3Component;
  let fixture: ComponentFixture<Feature76Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature76Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
