import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component12Component } from './feature47-component12.component';

describe('Feature47Component12Component', () => {
  let component: Feature47Component12Component;
  let fixture: ComponentFixture<Feature47Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
