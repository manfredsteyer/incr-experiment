import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component7Component } from './feature63-component7.component';

describe('Feature63Component7Component', () => {
  let component: Feature63Component7Component;
  let fixture: ComponentFixture<Feature63Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature63Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
