import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component12Component } from './feature84-component12.component';

describe('Feature84Component12Component', () => {
  let component: Feature84Component12Component;
  let fixture: ComponentFixture<Feature84Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature84Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
