import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component12Component } from './feature92-component12.component';

describe('Feature92Component12Component', () => {
  let component: Feature92Component12Component;
  let fixture: ComponentFixture<Feature92Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature92Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
