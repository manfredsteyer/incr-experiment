import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component15Component } from './feature90-component15.component';

describe('Feature90Component15Component', () => {
  let component: Feature90Component15Component;
  let fixture: ComponentFixture<Feature90Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature90Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
