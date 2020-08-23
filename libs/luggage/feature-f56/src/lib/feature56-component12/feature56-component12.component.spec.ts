import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component12Component } from './feature56-component12.component';

describe('Feature56Component12Component', () => {
  let component: Feature56Component12Component;
  let fixture: ComponentFixture<Feature56Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature56Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
