import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component20Component } from './feature63-component20.component';

describe('Feature63Component20Component', () => {
  let component: Feature63Component20Component;
  let fixture: ComponentFixture<Feature63Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature63Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
