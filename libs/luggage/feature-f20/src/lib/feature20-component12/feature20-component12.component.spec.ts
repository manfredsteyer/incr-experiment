import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component12Component } from './feature20-component12.component';

describe('Feature20Component12Component', () => {
  let component: Feature20Component12Component;
  let fixture: ComponentFixture<Feature20Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature20Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
