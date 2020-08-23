import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component12Component } from './feature58-component12.component';

describe('Feature58Component12Component', () => {
  let component: Feature58Component12Component;
  let fixture: ComponentFixture<Feature58Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature58Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
