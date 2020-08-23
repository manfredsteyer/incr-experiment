import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component21Component } from './feature54-component21.component';

describe('Feature54Component21Component', () => {
  let component: Feature54Component21Component;
  let fixture: ComponentFixture<Feature54Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature54Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
