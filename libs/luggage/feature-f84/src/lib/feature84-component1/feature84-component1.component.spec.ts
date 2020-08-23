import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component1Component } from './feature84-component1.component';

describe('Feature84Component1Component', () => {
  let component: Feature84Component1Component;
  let fixture: ComponentFixture<Feature84Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature84Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
