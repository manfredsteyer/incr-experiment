import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component21Component } from './feature6-component21.component';

describe('Feature6Component21Component', () => {
  let component: Feature6Component21Component;
  let fixture: ComponentFixture<Feature6Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
