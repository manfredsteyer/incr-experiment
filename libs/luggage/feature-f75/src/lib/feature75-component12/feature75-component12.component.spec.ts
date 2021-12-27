import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component12Component } from './feature75-component12.component';

describe('Feature75Component12Component', () => {
  let component: Feature75Component12Component;
  let fixture: ComponentFixture<Feature75Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature75Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
