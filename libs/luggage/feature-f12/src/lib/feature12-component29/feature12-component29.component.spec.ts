import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component29Component } from './feature12-component29.component';

describe('Feature12Component29Component', () => {
  let component: Feature12Component29Component;
  let fixture: ComponentFixture<Feature12Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature12Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
