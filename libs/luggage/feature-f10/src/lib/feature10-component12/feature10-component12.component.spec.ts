import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component12Component } from './feature10-component12.component';

describe('Feature10Component12Component', () => {
  let component: Feature10Component12Component;
  let fixture: ComponentFixture<Feature10Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature10Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
