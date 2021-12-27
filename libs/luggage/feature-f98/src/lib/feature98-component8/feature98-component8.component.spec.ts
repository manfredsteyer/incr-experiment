import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component8Component } from './feature98-component8.component';

describe('Feature98Component8Component', () => {
  let component: Feature98Component8Component;
  let fixture: ComponentFixture<Feature98Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
