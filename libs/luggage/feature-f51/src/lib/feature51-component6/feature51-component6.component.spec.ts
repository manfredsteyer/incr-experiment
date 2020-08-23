import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component6Component } from './feature51-component6.component';

describe('Feature51Component6Component', () => {
  let component: Feature51Component6Component;
  let fixture: ComponentFixture<Feature51Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
