import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component10Component } from './feature90-component10.component';

describe('Feature90Component10Component', () => {
  let component: Feature90Component10Component;
  let fixture: ComponentFixture<Feature90Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
