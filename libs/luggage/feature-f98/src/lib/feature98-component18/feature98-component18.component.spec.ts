import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component18Component } from './feature98-component18.component';

describe('Feature98Component18Component', () => {
  let component: Feature98Component18Component;
  let fixture: ComponentFixture<Feature98Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
