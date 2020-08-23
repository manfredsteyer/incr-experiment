import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component12Component } from './feature81-component12.component';

describe('Feature81Component12Component', () => {
  let component: Feature81Component12Component;
  let fixture: ComponentFixture<Feature81Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
