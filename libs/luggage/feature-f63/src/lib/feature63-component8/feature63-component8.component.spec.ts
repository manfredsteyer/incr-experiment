import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component8Component } from './feature63-component8.component';

describe('Feature63Component8Component', () => {
  let component: Feature63Component8Component;
  let fixture: ComponentFixture<Feature63Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature63Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
