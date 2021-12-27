import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component8Component } from './feature86-component8.component';

describe('Feature86Component8Component', () => {
  let component: Feature86Component8Component;
  let fixture: ComponentFixture<Feature86Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
