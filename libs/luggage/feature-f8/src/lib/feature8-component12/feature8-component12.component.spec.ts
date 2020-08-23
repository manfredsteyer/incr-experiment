import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component12Component } from './feature8-component12.component';

describe('Feature8Component12Component', () => {
  let component: Feature8Component12Component;
  let fixture: ComponentFixture<Feature8Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
