import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component1Component } from './feature28-component1.component';

describe('Feature28Component1Component', () => {
  let component: Feature28Component1Component;
  let fixture: ComponentFixture<Feature28Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature28Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
