import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component6Component } from './feature55-component6.component';

describe('Feature55Component6Component', () => {
  let component: Feature55Component6Component;
  let fixture: ComponentFixture<Feature55Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
