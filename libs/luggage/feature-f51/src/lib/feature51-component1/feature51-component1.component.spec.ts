import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component1Component } from './feature51-component1.component';

describe('Feature51Component1Component', () => {
  let component: Feature51Component1Component;
  let fixture: ComponentFixture<Feature51Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
