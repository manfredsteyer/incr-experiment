import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component5Component } from './feature90-component5.component';

describe('Feature90Component5Component', () => {
  let component: Feature90Component5Component;
  let fixture: ComponentFixture<Feature90Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
