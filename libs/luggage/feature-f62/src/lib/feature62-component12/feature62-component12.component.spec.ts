import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component12Component } from './feature62-component12.component';

describe('Feature62Component12Component', () => {
  let component: Feature62Component12Component;
  let fixture: ComponentFixture<Feature62Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature62Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
