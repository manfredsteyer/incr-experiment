import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component12Component } from './feature71-component12.component';

describe('Feature71Component12Component', () => {
  let component: Feature71Component12Component;
  let fixture: ComponentFixture<Feature71Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
