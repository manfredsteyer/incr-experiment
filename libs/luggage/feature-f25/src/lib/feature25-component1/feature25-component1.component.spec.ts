import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component1Component } from './feature25-component1.component';

describe('Feature25Component1Component', () => {
  let component: Feature25Component1Component;
  let fixture: ComponentFixture<Feature25Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature25Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
