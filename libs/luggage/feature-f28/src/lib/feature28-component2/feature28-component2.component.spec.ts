import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component2Component } from './feature28-component2.component';

describe('Feature28Component2Component', () => {
  let component: Feature28Component2Component;
  let fixture: ComponentFixture<Feature28Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature28Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
