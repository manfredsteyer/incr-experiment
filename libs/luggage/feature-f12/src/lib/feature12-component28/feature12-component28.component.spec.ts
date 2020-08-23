import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component28Component } from './feature12-component28.component';

describe('Feature12Component28Component', () => {
  let component: Feature12Component28Component;
  let fixture: ComponentFixture<Feature12Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature12Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
