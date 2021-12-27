import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component28Component } from './feature90-component28.component';

describe('Feature90Component28Component', () => {
  let component: Feature90Component28Component;
  let fixture: ComponentFixture<Feature90Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
