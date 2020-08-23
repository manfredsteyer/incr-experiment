import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component24Component } from './feature63-component24.component';

describe('Feature63Component24Component', () => {
  let component: Feature63Component24Component;
  let fixture: ComponentFixture<Feature63Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature63Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
