import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component21Component } from './feature26-component21.component';

describe('Feature26Component21Component', () => {
  let component: Feature26Component21Component;
  let fixture: ComponentFixture<Feature26Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature26Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
