import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component12Component } from './feature31-component12.component';

describe('Feature31Component12Component', () => {
  let component: Feature31Component12Component;
  let fixture: ComponentFixture<Feature31Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature31Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
