import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component2Component } from './feature32-component2.component';

describe('Feature32Component2Component', () => {
  let component: Feature32Component2Component;
  let fixture: ComponentFixture<Feature32Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
