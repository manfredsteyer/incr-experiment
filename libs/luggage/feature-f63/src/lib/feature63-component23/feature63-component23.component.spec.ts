import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component23Component } from './feature63-component23.component';

describe('Feature63Component23Component', () => {
  let component: Feature63Component23Component;
  let fixture: ComponentFixture<Feature63Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature63Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
