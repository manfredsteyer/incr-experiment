import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component28Component } from './feature56-component28.component';

describe('Feature56Component28Component', () => {
  let component: Feature56Component28Component;
  let fixture: ComponentFixture<Feature56Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
