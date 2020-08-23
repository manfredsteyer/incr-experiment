import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component2Component } from './feature53-component2.component';

describe('Feature53Component2Component', () => {
  let component: Feature53Component2Component;
  let fixture: ComponentFixture<Feature53Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
