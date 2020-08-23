import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component21Component } from './feature79-component21.component';

describe('Feature79Component21Component', () => {
  let component: Feature79Component21Component;
  let fixture: ComponentFixture<Feature79Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
