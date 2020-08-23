import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component12Component } from './feature89-component12.component';

describe('Feature89Component12Component', () => {
  let component: Feature89Component12Component;
  let fixture: ComponentFixture<Feature89Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature89Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
