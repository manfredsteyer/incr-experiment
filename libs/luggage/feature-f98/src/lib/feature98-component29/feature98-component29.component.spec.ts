import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component29Component } from './feature98-component29.component';

describe('Feature98Component29Component', () => {
  let component: Feature98Component29Component;
  let fixture: ComponentFixture<Feature98Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
