import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component12Component } from './feature13-component12.component';

describe('Feature13Component12Component', () => {
  let component: Feature13Component12Component;
  let fixture: ComponentFixture<Feature13Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature13Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
