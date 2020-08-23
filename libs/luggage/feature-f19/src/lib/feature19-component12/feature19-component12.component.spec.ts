import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component12Component } from './feature19-component12.component';

describe('Feature19Component12Component', () => {
  let component: Feature19Component12Component;
  let fixture: ComponentFixture<Feature19Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature19Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
