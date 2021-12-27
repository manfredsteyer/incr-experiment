import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component12Component } from './feature97-component12.component';

describe('Feature97Component12Component', () => {
  let component: Feature97Component12Component;
  let fixture: ComponentFixture<Feature97Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature97Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
