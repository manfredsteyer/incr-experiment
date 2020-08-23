import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component1Component } from './feature88-component1.component';

describe('Feature88Component1Component', () => {
  let component: Feature88Component1Component;
  let fixture: ComponentFixture<Feature88Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature88Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
