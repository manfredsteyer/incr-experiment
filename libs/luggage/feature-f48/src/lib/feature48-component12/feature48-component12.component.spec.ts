import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component12Component } from './feature48-component12.component';

describe('Feature48Component12Component', () => {
  let component: Feature48Component12Component;
  let fixture: ComponentFixture<Feature48Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature48Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
