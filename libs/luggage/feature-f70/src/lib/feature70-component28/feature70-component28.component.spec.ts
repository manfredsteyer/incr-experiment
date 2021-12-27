import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component28Component } from './feature70-component28.component';

describe('Feature70Component28Component', () => {
  let component: Feature70Component28Component;
  let fixture: ComponentFixture<Feature70Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature70Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
