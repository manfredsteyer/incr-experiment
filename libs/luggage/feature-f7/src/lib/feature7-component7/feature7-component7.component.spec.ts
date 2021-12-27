import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component7Component } from './feature7-component7.component';

describe('Feature7Component7Component', () => {
  let component: Feature7Component7Component;
  let fixture: ComponentFixture<Feature7Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature7Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
