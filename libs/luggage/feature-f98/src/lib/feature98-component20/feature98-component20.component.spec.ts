import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component20Component } from './feature98-component20.component';

describe('Feature98Component20Component', () => {
  let component: Feature98Component20Component;
  let fixture: ComponentFixture<Feature98Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
