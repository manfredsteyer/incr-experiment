import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component5Component } from './feature12-component5.component';

describe('Feature12Component5Component', () => {
  let component: Feature12Component5Component;
  let fixture: ComponentFixture<Feature12Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature12Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
