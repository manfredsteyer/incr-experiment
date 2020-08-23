import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component1Component } from './feature27-component1.component';

describe('Feature27Component1Component', () => {
  let component: Feature27Component1Component;
  let fixture: ComponentFixture<Feature27Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature27Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
