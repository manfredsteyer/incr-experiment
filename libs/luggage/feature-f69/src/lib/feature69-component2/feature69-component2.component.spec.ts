import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component2Component } from './feature69-component2.component';

describe('Feature69Component2Component', () => {
  let component: Feature69Component2Component;
  let fixture: ComponentFixture<Feature69Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature69Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
