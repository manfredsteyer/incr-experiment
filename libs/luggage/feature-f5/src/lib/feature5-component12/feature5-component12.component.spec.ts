import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component12Component } from './feature5-component12.component';

describe('Feature5Component12Component', () => {
  let component: Feature5Component12Component;
  let fixture: ComponentFixture<Feature5Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature5Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
