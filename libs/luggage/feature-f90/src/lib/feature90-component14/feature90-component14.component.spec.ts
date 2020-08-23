import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component14Component } from './feature90-component14.component';

describe('Feature90Component14Component', () => {
  let component: Feature90Component14Component;
  let fixture: ComponentFixture<Feature90Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature90Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
