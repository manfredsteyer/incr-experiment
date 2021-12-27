import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component4Component } from './feature21-component4.component';

describe('Feature21Component4Component', () => {
  let component: Feature21Component4Component;
  let fixture: ComponentFixture<Feature21Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature21Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
