import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component6Component } from './feature12-component6.component';

describe('Feature12Component6Component', () => {
  let component: Feature12Component6Component;
  let fixture: ComponentFixture<Feature12Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature12Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});