import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component26Component } from './feature21-component26.component';

describe('Feature21Component26Component', () => {
  let component: Feature21Component26Component;
  let fixture: ComponentFixture<Feature21Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature21Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
