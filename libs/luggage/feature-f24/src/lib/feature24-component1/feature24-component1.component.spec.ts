import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component1Component } from './feature24-component1.component';

describe('Feature24Component1Component', () => {
  let component: Feature24Component1Component;
  let fixture: ComponentFixture<Feature24Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature24Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
