import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component7Component } from './feature90-component7.component';

describe('Feature90Component7Component', () => {
  let component: Feature90Component7Component;
  let fixture: ComponentFixture<Feature90Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature90Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
