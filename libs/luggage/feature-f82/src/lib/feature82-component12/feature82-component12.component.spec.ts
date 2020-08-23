import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component12Component } from './feature82-component12.component';

describe('Feature82Component12Component', () => {
  let component: Feature82Component12Component;
  let fixture: ComponentFixture<Feature82Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature82Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
