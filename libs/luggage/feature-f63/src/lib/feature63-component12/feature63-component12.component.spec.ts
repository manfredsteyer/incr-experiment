import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component12Component } from './feature63-component12.component';

describe('Feature63Component12Component', () => {
  let component: Feature63Component12Component;
  let fixture: ComponentFixture<Feature63Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature63Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
