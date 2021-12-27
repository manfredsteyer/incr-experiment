import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component12Component } from './feature38-component12.component';

describe('Feature38Component12Component', () => {
  let component: Feature38Component12Component;
  let fixture: ComponentFixture<Feature38Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature38Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
