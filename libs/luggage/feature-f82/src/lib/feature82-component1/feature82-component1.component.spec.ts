import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component1Component } from './feature82-component1.component';

describe('Feature82Component1Component', () => {
  let component: Feature82Component1Component;
  let fixture: ComponentFixture<Feature82Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature82Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
