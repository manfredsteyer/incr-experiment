import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component8Component } from './feature58-component8.component';

describe('Feature58Component8Component', () => {
  let component: Feature58Component8Component;
  let fixture: ComponentFixture<Feature58Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature58Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
