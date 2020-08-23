import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component1Component } from './feature32-component1.component';

describe('Feature32Component1Component', () => {
  let component: Feature32Component1Component;
  let fixture: ComponentFixture<Feature32Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
