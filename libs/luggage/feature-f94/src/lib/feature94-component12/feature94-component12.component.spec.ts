import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component12Component } from './feature94-component12.component';

describe('Feature94Component12Component', () => {
  let component: Feature94Component12Component;
  let fixture: ComponentFixture<Feature94Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature94Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
