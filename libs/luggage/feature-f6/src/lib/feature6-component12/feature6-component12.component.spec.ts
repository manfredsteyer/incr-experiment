import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component12Component } from './feature6-component12.component';

describe('Feature6Component12Component', () => {
  let component: Feature6Component12Component;
  let fixture: ComponentFixture<Feature6Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature6Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
