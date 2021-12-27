import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component8Component } from './feature56-component8.component';

describe('Feature56Component8Component', () => {
  let component: Feature56Component8Component;
  let fixture: ComponentFixture<Feature56Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
