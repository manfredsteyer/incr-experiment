import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component7Component } from './feature98-component7.component';

describe('Feature98Component7Component', () => {
  let component: Feature98Component7Component;
  let fixture: ComponentFixture<Feature98Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
