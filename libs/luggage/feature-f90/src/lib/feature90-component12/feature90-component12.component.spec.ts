import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component12Component } from './feature90-component12.component';

describe('Feature90Component12Component', () => {
  let component: Feature90Component12Component;
  let fixture: ComponentFixture<Feature90Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
