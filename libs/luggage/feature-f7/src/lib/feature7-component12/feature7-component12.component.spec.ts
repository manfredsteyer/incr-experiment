import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component12Component } from './feature7-component12.component';

describe('Feature7Component12Component', () => {
  let component: Feature7Component12Component;
  let fixture: ComponentFixture<Feature7Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature7Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
