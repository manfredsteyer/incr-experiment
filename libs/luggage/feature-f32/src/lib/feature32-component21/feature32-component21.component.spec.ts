import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component21Component } from './feature32-component21.component';

describe('Feature32Component21Component', () => {
  let component: Feature32Component21Component;
  let fixture: ComponentFixture<Feature32Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
