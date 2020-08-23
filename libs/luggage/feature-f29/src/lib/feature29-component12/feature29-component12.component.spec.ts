import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component12Component } from './feature29-component12.component';

describe('Feature29Component12Component', () => {
  let component: Feature29Component12Component;
  let fixture: ComponentFixture<Feature29Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
