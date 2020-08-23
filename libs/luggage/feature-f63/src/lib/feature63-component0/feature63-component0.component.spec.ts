import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component0Component } from './feature63-component0.component';

describe('Feature63Component0Component', () => {
  let component: Feature63Component0Component;
  let fixture: ComponentFixture<Feature63Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature63Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
