import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component1Component } from './feature50-component1.component';

describe('Feature50Component1Component', () => {
  let component: Feature50Component1Component;
  let fixture: ComponentFixture<Feature50Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
