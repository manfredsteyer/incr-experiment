import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component2Component } from './feature71-component2.component';

describe('Feature71Component2Component', () => {
  let component: Feature71Component2Component;
  let fixture: ComponentFixture<Feature71Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
