import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component5Component } from './feature63-component5.component';

describe('Feature63Component5Component', () => {
  let component: Feature63Component5Component;
  let fixture: ComponentFixture<Feature63Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature63Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
