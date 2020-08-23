import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component2Component } from './feature79-component2.component';

describe('Feature79Component2Component', () => {
  let component: Feature79Component2Component;
  let fixture: ComponentFixture<Feature79Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
