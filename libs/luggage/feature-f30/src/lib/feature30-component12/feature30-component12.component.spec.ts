import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component12Component } from './feature30-component12.component';

describe('Feature30Component12Component', () => {
  let component: Feature30Component12Component;
  let fixture: ComponentFixture<Feature30Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
