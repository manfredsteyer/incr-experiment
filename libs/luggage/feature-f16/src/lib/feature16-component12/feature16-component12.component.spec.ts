import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component12Component } from './feature16-component12.component';

describe('Feature16Component12Component', () => {
  let component: Feature16Component12Component;
  let fixture: ComponentFixture<Feature16Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
