import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component7Component } from './feature86-component7.component';

describe('Feature86Component7Component', () => {
  let component: Feature86Component7Component;
  let fixture: ComponentFixture<Feature86Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature86Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
