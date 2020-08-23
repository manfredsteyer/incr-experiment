import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component21Component } from './feature86-component21.component';

describe('Feature86Component21Component', () => {
  let component: Feature86Component21Component;
  let fixture: ComponentFixture<Feature86Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature86Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
