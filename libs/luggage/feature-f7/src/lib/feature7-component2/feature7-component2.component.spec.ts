import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component2Component } from './feature7-component2.component';

describe('Feature7Component2Component', () => {
  let component: Feature7Component2Component;
  let fixture: ComponentFixture<Feature7Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature7Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
