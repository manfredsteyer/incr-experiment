import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component12Component } from './feature68-component12.component';

describe('Feature68Component12Component', () => {
  let component: Feature68Component12Component;
  let fixture: ComponentFixture<Feature68Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature68Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
