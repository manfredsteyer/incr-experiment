import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component12Component } from './feature70-component12.component';

describe('Feature70Component12Component', () => {
  let component: Feature70Component12Component;
  let fixture: ComponentFixture<Feature70Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature70Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
