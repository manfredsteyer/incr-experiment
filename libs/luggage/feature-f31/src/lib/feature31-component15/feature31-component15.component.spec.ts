import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component15Component } from './feature31-component15.component';

describe('Feature31Component15Component', () => {
  let component: Feature31Component15Component;
  let fixture: ComponentFixture<Feature31Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature31Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
