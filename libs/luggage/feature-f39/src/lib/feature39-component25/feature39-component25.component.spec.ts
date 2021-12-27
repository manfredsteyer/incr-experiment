import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component25Component } from './feature39-component25.component';

describe('Feature39Component25Component', () => {
  let component: Feature39Component25Component;
  let fixture: ComponentFixture<Feature39Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
