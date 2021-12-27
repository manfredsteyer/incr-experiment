import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component24Component } from './feature90-component24.component';

describe('Feature90Component24Component', () => {
  let component: Feature90Component24Component;
  let fixture: ComponentFixture<Feature90Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
