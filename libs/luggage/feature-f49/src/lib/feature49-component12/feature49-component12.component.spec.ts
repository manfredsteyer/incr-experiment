import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component12Component } from './feature49-component12.component';

describe('Feature49Component12Component', () => {
  let component: Feature49Component12Component;
  let fixture: ComponentFixture<Feature49Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
