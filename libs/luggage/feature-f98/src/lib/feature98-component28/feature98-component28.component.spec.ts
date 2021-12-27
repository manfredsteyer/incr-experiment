import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component28Component } from './feature98-component28.component';

describe('Feature98Component28Component', () => {
  let component: Feature98Component28Component;
  let fixture: ComponentFixture<Feature98Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
