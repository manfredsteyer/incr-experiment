import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component12Component } from './feature79-component12.component';

describe('Feature79Component12Component', () => {
  let component: Feature79Component12Component;
  let fixture: ComponentFixture<Feature79Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature79Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
