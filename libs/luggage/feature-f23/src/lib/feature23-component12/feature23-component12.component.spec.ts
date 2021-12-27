import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component12Component } from './feature23-component12.component';

describe('Feature23Component12Component', () => {
  let component: Feature23Component12Component;
  let fixture: ComponentFixture<Feature23Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature23Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
