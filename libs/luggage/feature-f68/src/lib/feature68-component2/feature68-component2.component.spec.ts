import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component2Component } from './feature68-component2.component';

describe('Feature68Component2Component', () => {
  let component: Feature68Component2Component;
  let fixture: ComponentFixture<Feature68Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature68Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});