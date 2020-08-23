import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component12Component } from './feature93-component12.component';

describe('Feature93Component12Component', () => {
  let component: Feature93Component12Component;
  let fixture: ComponentFixture<Feature93Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature93Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
