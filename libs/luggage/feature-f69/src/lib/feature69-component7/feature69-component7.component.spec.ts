import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component7Component } from './feature69-component7.component';

describe('Feature69Component7Component', () => {
  let component: Feature69Component7Component;
  let fixture: ComponentFixture<Feature69Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature69Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
