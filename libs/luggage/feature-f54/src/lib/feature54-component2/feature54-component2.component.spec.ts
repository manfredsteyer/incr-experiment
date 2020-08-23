import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component2Component } from './feature54-component2.component';

describe('Feature54Component2Component', () => {
  let component: Feature54Component2Component;
  let fixture: ComponentFixture<Feature54Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature54Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
