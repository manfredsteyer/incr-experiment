import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component12Component } from './feature34-component12.component';

describe('Feature34Component12Component', () => {
  let component: Feature34Component12Component;
  let fixture: ComponentFixture<Feature34Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature34Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
