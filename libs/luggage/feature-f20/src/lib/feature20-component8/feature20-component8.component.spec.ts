import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component8Component } from './feature20-component8.component';

describe('Feature20Component8Component', () => {
  let component: Feature20Component8Component;
  let fixture: ComponentFixture<Feature20Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature20Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
