import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component21Component } from './feature82-component21.component';

describe('Feature82Component21Component', () => {
  let component: Feature82Component21Component;
  let fixture: ComponentFixture<Feature82Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature82Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
