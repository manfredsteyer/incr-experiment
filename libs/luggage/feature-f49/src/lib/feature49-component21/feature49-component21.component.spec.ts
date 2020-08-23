import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component21Component } from './feature49-component21.component';

describe('Feature49Component21Component', () => {
  let component: Feature49Component21Component;
  let fixture: ComponentFixture<Feature49Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
