import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component7Component } from './feature26-component7.component';

describe('Feature26Component7Component', () => {
  let component: Feature26Component7Component;
  let fixture: ComponentFixture<Feature26Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
