import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component12Component } from './feature59-component12.component';

describe('Feature59Component12Component', () => {
  let component: Feature59Component12Component;
  let fixture: ComponentFixture<Feature59Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature59Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
