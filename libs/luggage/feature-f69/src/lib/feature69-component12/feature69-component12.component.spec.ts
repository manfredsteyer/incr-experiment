import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component12Component } from './feature69-component12.component';

describe('Feature69Component12Component', () => {
  let component: Feature69Component12Component;
  let fixture: ComponentFixture<Feature69Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature69Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
