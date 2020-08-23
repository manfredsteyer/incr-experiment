import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component2Component } from './feature75-component2.component';

describe('Feature75Component2Component', () => {
  let component: Feature75Component2Component;
  let fixture: ComponentFixture<Feature75Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature75Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
