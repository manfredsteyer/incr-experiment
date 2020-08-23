import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component1Component } from './feature53-component1.component';

describe('Feature53Component1Component', () => {
  let component: Feature53Component1Component;
  let fixture: ComponentFixture<Feature53Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
