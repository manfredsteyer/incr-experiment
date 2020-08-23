import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component2Component } from './feature48-component2.component';

describe('Feature48Component2Component', () => {
  let component: Feature48Component2Component;
  let fixture: ComponentFixture<Feature48Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature48Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
