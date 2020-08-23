import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component1Component } from './feature64-component1.component';

describe('Feature64Component1Component', () => {
  let component: Feature64Component1Component;
  let fixture: ComponentFixture<Feature64Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
