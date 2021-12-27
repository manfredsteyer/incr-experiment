import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component23Component } from './feature86-component23.component';

describe('Feature86Component23Component', () => {
  let component: Feature86Component23Component;
  let fixture: ComponentFixture<Feature86Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
