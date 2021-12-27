import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component12Component } from './feature65-component12.component';

describe('Feature65Component12Component', () => {
  let component: Feature65Component12Component;
  let fixture: ComponentFixture<Feature65Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
