import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component1Component } from './feature63-component1.component';

describe('Feature63Component1Component', () => {
  let component: Feature63Component1Component;
  let fixture: ComponentFixture<Feature63Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature63Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
