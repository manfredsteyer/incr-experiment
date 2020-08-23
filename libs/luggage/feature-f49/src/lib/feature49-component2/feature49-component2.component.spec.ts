import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component2Component } from './feature49-component2.component';

describe('Feature49Component2Component', () => {
  let component: Feature49Component2Component;
  let fixture: ComponentFixture<Feature49Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
