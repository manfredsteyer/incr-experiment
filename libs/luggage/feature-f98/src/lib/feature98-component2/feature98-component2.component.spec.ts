import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component2Component } from './feature98-component2.component';

describe('Feature98Component2Component', () => {
  let component: Feature98Component2Component;
  let fixture: ComponentFixture<Feature98Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature98Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
