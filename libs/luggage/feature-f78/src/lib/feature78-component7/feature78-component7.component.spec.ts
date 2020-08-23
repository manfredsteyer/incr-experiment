import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component7Component } from './feature78-component7.component';

describe('Feature78Component7Component', () => {
  let component: Feature78Component7Component;
  let fixture: ComponentFixture<Feature78Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature78Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
