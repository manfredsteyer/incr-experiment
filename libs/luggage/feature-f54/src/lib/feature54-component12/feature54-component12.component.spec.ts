import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component12Component } from './feature54-component12.component';

describe('Feature54Component12Component', () => {
  let component: Feature54Component12Component;
  let fixture: ComponentFixture<Feature54Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature54Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
