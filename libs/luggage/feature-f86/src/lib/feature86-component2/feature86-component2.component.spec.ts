import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component2Component } from './feature86-component2.component';

describe('Feature86Component2Component', () => {
  let component: Feature86Component2Component;
  let fixture: ComponentFixture<Feature86Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
