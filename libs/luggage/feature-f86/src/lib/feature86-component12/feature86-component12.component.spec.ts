import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component12Component } from './feature86-component12.component';

describe('Feature86Component12Component', () => {
  let component: Feature86Component12Component;
  let fixture: ComponentFixture<Feature86Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
