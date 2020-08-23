import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component1Component } from './feature73-component1.component';

describe('Feature73Component1Component', () => {
  let component: Feature73Component1Component;
  let fixture: ComponentFixture<Feature73Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature73Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
