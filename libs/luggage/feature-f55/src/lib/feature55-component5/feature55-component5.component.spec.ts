import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component5Component } from './feature55-component5.component';

describe('Feature55Component5Component', () => {
  let component: Feature55Component5Component;
  let fixture: ComponentFixture<Feature55Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
