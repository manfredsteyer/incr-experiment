import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component29Component } from './feature55-component29.component';

describe('Feature55Component29Component', () => {
  let component: Feature55Component29Component;
  let fixture: ComponentFixture<Feature55Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
