import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component12Component } from './feature61-component12.component';

describe('Feature61Component12Component', () => {
  let component: Feature61Component12Component;
  let fixture: ComponentFixture<Feature61Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature61Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
