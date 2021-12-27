import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component23Component } from './feature90-component23.component';

describe('Feature90Component23Component', () => {
  let component: Feature90Component23Component;
  let fixture: ComponentFixture<Feature90Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
