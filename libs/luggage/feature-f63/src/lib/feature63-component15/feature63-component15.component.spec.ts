import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component15Component } from './feature63-component15.component';

describe('Feature63Component15Component', () => {
  let component: Feature63Component15Component;
  let fixture: ComponentFixture<Feature63Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature63Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
