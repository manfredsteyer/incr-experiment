import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component2Component } from './feature63-component2.component';

describe('Feature63Component2Component', () => {
  let component: Feature63Component2Component;
  let fixture: ComponentFixture<Feature63Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature63Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
