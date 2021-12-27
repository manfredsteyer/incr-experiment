import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component12Component } from './feature26-component12.component';

describe('Feature26Component12Component', () => {
  let component: Feature26Component12Component;
  let fixture: ComponentFixture<Feature26Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
