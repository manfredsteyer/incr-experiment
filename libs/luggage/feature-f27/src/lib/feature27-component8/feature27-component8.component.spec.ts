import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component8Component } from './feature27-component8.component';

describe('Feature27Component8Component', () => {
  let component: Feature27Component8Component;
  let fixture: ComponentFixture<Feature27Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature27Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
