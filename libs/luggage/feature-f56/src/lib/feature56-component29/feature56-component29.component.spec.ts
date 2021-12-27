import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component29Component } from './feature56-component29.component';

describe('Feature56Component29Component', () => {
  let component: Feature56Component29Component;
  let fixture: ComponentFixture<Feature56Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
