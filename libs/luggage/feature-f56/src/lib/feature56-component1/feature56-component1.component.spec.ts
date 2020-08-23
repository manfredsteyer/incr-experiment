import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component1Component } from './feature56-component1.component';

describe('Feature56Component1Component', () => {
  let component: Feature56Component1Component;
  let fixture: ComponentFixture<Feature56Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature56Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
