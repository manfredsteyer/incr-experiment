import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component2Component } from './feature92-component2.component';

describe('Feature92Component2Component', () => {
  let component: Feature92Component2Component;
  let fixture: ComponentFixture<Feature92Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature92Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
