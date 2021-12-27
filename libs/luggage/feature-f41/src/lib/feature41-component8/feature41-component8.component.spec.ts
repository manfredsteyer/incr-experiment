import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component8Component } from './feature41-component8.component';

describe('Feature41Component8Component', () => {
  let component: Feature41Component8Component;
  let fixture: ComponentFixture<Feature41Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature41Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
