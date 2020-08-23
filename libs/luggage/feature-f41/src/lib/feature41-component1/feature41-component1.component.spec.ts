import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component1Component } from './feature41-component1.component';

describe('Feature41Component1Component', () => {
  let component: Feature41Component1Component;
  let fixture: ComponentFixture<Feature41Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature41Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
