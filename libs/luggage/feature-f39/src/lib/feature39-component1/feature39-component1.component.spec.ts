import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component1Component } from './feature39-component1.component';

describe('Feature39Component1Component', () => {
  let component: Feature39Component1Component;
  let fixture: ComponentFixture<Feature39Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature39Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
