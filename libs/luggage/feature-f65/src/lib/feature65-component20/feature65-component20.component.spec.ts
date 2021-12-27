import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component20Component } from './feature65-component20.component';

describe('Feature65Component20Component', () => {
  let component: Feature65Component20Component;
  let fixture: ComponentFixture<Feature65Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
