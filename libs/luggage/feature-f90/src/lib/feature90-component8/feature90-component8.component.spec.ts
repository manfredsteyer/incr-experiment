import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component8Component } from './feature90-component8.component';

describe('Feature90Component8Component', () => {
  let component: Feature90Component8Component;
  let fixture: ComponentFixture<Feature90Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
