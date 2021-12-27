import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component15Component } from './feature96-component15.component';

describe('Feature96Component15Component', () => {
  let component: Feature96Component15Component;
  let fixture: ComponentFixture<Feature96Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature96Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
