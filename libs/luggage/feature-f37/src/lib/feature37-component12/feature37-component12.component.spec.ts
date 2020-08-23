import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component12Component } from './feature37-component12.component';

describe('Feature37Component12Component', () => {
  let component: Feature37Component12Component;
  let fixture: ComponentFixture<Feature37Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature37Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
