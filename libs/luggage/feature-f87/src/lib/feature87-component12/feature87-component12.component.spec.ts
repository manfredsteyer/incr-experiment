import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component12Component } from './feature87-component12.component';

describe('Feature87Component12Component', () => {
  let component: Feature87Component12Component;
  let fixture: ComponentFixture<Feature87Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
