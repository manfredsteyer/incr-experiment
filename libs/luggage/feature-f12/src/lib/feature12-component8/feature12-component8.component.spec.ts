import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component8Component } from './feature12-component8.component';

describe('Feature12Component8Component', () => {
  let component: Feature12Component8Component;
  let fixture: ComponentFixture<Feature12Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature12Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
