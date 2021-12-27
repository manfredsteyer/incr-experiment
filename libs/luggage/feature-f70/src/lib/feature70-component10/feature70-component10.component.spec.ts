import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component10Component } from './feature70-component10.component';

describe('Feature70Component10Component', () => {
  let component: Feature70Component10Component;
  let fixture: ComponentFixture<Feature70Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature70Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
