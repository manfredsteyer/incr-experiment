import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component2Component } from './feature6-component2.component';

describe('Feature6Component2Component', () => {
  let component: Feature6Component2Component;
  let fixture: ComponentFixture<Feature6Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
