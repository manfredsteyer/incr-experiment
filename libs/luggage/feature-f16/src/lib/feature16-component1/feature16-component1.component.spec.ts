import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component1Component } from './feature16-component1.component';

describe('Feature16Component1Component', () => {
  let component: Feature16Component1Component;
  let fixture: ComponentFixture<Feature16Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
