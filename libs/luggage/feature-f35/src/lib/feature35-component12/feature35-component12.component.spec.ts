import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component12Component } from './feature35-component12.component';

describe('Feature35Component12Component', () => {
  let component: Feature35Component12Component;
  let fixture: ComponentFixture<Feature35Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature35Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
