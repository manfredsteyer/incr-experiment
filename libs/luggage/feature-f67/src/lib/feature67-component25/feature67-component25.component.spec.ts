import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component25Component } from './feature67-component25.component';

describe('Feature67Component25Component', () => {
  let component: Feature67Component25Component;
  let fixture: ComponentFixture<Feature67Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
