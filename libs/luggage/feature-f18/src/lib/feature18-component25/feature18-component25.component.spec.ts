import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component25Component } from './feature18-component25.component';

describe('Feature18Component25Component', () => {
  let component: Feature18Component25Component;
  let fixture: ComponentFixture<Feature18Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature18Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
