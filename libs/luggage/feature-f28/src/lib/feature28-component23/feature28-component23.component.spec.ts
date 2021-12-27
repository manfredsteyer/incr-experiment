import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component23Component } from './feature28-component23.component';

describe('Feature28Component23Component', () => {
  let component: Feature28Component23Component;
  let fixture: ComponentFixture<Feature28Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature28Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
