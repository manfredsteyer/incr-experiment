import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component1Component } from './feature70-component1.component';

describe('Feature70Component1Component', () => {
  let component: Feature70Component1Component;
  let fixture: ComponentFixture<Feature70Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
