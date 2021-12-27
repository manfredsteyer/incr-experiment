import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component0Component } from './feature28-component0.component';

describe('Feature28Component0Component', () => {
  let component: Feature28Component0Component;
  let fixture: ComponentFixture<Feature28Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature28Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
