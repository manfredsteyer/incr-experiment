import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component8Component } from './feature83-component8.component';

describe('Feature83Component8Component', () => {
  let component: Feature83Component8Component;
  let fixture: ComponentFixture<Feature83Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature83Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
