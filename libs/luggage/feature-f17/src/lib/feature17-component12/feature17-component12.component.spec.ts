import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component12Component } from './feature17-component12.component';

describe('Feature17Component12Component', () => {
  let component: Feature17Component12Component;
  let fixture: ComponentFixture<Feature17Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
